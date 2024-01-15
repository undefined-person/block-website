import { UIFormPageLayout } from "@/shared/layouts/ui-form-page-layout";
import { SignInForm } from "@/features/auth";
import { UIHeader } from "@/shared/ui/ui-header";

export const SignInPage = () => {
  return (
    <UIFormPageLayout
      title="Sign In"
      form={<SignInForm />}
      header={<UIHeader />}
    />
  );
};
