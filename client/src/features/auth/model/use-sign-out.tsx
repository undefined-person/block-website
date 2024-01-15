import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/router";

import { authControllerSignOut } from "@/shared/api/generated";
import { ROUTES } from "@/shared/const/routes";
import { useResetSession } from "@/entities/session/queries";

export const useSignOut = () => {
  const router = useRouter();
  const resetSession = useResetSession();

  const signOutMutation = useMutation({
    mutationFn: authControllerSignOut,
    onSuccess: () => {
      router.push(ROUTES.SIGN_IN);
      resetSession();
    },
  });

  return {
    signOut: signOutMutation.mutate,
    isLoading: signOutMutation.isPending,
  };
};
