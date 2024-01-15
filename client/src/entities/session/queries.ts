import { useQuery, useQueryClient } from "@tanstack/react-query";

import { authControllerGetSessionInfo } from "@/shared/api/generated";

const sessionKey = "session";

export function useSessionQuery() {
  const { isPending, isError, data } = useQuery({
    queryKey: [sessionKey],
    queryFn: authControllerGetSessionInfo,
    retry: 0,
    staleTime: 5 * 60 * 1000,
  });

  return {
    isPending,
    isError,
    data,
  };
}

export function useResetSession() {
  const queryClient = useQueryClient();
  return () => queryClient.removeQueries({ queryKey: [sessionKey] });
}
