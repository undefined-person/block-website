import { UIButton } from "@/shared/ui/ui-button";
import { useToggleBlocking } from "../model/use-toggle-blocking";

export function ToggleBlockingButton() {
  const { isBlockingEnabled, isLoading, toggleBlocking, isReady } =
    useToggleBlocking();

  if (!isReady) {
    return null;
  }

  return (
    <UIButton
      variant={isBlockingEnabled ? "secondary" : "primary"}
      disabled={isLoading}
      onClick={toggleBlocking}
    >
      {isBlockingEnabled ? "Disable" : "Enable"} blocking
    </UIButton>
  );
}
