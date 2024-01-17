import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import {
  accountControllerGetAccount,
  accountControllerUpdateAccount,
} from "@/shared/api/generated";

const accountKey = ["account"];

export function useAccountQuery() {
  return useQuery({
    queryKey: accountKey,
    queryFn: accountControllerGetAccount,
  });
}

export function useUpdateAccountMutation() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: accountControllerUpdateAccount,
    onSuccess(data) {
      queryClient.setQueryData(accountKey, data);
    },
    async onSettled() {
      queryClient.invalidateQueries({
        queryKey: accountKey,
      });
    },
  });
}
