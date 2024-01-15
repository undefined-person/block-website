import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";

import { authControllerSignUp } from "@/shared/api/generated";
import { ROUTES } from "@/shared/const/routes";

export const useSignUpForm = () => {
  const router = useRouter();
  const { register, handleSubmit } = useForm<{
    email: string;
    password: string;
  }>();

  const signUpMutation = useMutation({
    mutationFn: authControllerSignUp,
    onSuccess: () => {
      router.push(ROUTES.HOME);
    },
  });

  const error = signUpMutation.error ? "Sign up Failed" : undefined;

  return {
    isLoading: signUpMutation.isPending,
    errorMessage: error,
    register,
    handleSubmit: handleSubmit((data) => signUpMutation.mutate(data)),
  };
};
