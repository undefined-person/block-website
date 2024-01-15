import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";

import { authControllerSignIn } from "@/shared/api/generated";
import { ROUTES } from "@/shared/const/routes";

export const useSignInForm = () => {
  const router = useRouter();
  const { register, handleSubmit } = useForm<{
    email: string;
    password: string;
  }>();

  const signInMutation = useMutation({
    mutationFn: authControllerSignIn,
    onSuccess: () => {
      router.push(ROUTES.HOME);
    },
  });

  const error = signInMutation.error ? "Sign In Failed" : undefined;

  return {
    isLoading: signInMutation.isPending,
    errorMessage: error,
    register,
    handleSubmit: handleSubmit((data) => signInMutation.mutate(data)),
  };
};
