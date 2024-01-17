import { UIHeader } from "@/shared/ui/ui-header";
import { ToggleBlockingButton } from "@/features/toggle-blocking";
import { Profile } from "@/widgets/profile";

export const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <UIHeader>
        <Profile />
      </UIHeader>
      <div className="grid grid-cols-[200px_1fr]">
        <aside className="p-5 bg-gray-50 h-[calc(100vh_-_105px)]">
          <ToggleBlockingButton />
        </aside>
        <main>Block List</main>
      </div>
    </div>
  );
};
