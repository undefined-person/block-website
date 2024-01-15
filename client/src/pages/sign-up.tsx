import { UIFormPageLayout } from "@/shared/layouts/ui-form-page-layout";
import { SignUpForm } from "@/features/auth";
import { UIHeader } from "@/shared/ui/ui-header";

export const SignUpPage = () => {
  return (
    <UIFormPageLayout
      title="Sign Up"
      form={<SignUpForm />}
      header={<UIHeader />}
    />
  );
};
