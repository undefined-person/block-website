import { UIButton } from "@/shared/ui/ui-button";
import { UITextField } from "@/shared/ui/ui-text-field";
import { ROUTES } from "@/shared/const/routes";
import { UILink } from "@/shared/ui/ui-link";
import { useSignInForm } from "../model/use-sign-in-form";

export const SignInForm = () => {
  const { handleSubmit, register, isLoading, errorMessage } = useSignInForm();

  return (
    <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
      <UITextField
        label="Email"
        inputProps={{ type: "email", ...register("email", { required: true }) }}
      />
      <UITextField
        label="Password"
        inputProps={{
          type: "password",
          ...register("password", { required: true }),
        }}
      />
      <UIButton variant="primary" className="mt-1 w-full" disabled={isLoading}>
        Sign In
      </UIButton>
      <UILink className="text-center" href={ROUTES.SIGN_UP}>
        Sign Up
      </UILink>
      {errorMessage && <div className="text-rose-500">{errorMessage}</div>}
    </form>
  );
};
