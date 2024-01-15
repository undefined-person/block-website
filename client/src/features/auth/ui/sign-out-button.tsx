import { UIButton } from "@/shared/ui/ui-button";
import { useSignOut } from "../model/use-sign-out";

export const SignOutButton = () => {
  const { isLoading, signOut } = useSignOut();
  return (
    <UIButton
      variant="outline"
      disabled={isLoading}
      onClick={() => signOut({})}
    >
      Sign out
    </UIButton>
  );
};
