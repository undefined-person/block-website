import { useSessionQuery } from "@/entities/session";
import { SignOutButton } from "@/features/auth";

export function Profile() {
  const { data: session } = useSessionQuery();

  if (!session) {
    return null;
  }

  return (
    <div className="flex gap-2 items-center">
      <span>{session?.email}</span>
      <SignOutButton />
    </div>
  );
}
