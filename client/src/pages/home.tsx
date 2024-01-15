import { UIHeader } from "@/shared/ui/ui-header";
import { SignOutButton } from "@/features/auth";
import { useSessionQuery } from "@/entities/session/queries";

export const HomePage = () => {
  const { data } = useSessionQuery();

  return (
    <main className="min-h-screen">
      <UIHeader>
        {
          <div>
            <span>{data?.email}</span>
            <SignOutButton />
          </div>
        }
      </UIHeader>
    </main>
  );
};
