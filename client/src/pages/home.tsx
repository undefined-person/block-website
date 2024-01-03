import { authControllerGetSessionInfo } from "@/shared/api/generated";
import { useQuery } from "@tanstack/react-query";

import { UIHeader } from "@/shared/ui/ui-header";

export default function HomePage() {
  const { data, isLoading } = useQuery({
    queryKey: ["session"],
    queryFn: () => authControllerGetSessionInfo(),
  });

  return (
    <main className="min-h-screen">
      <UIHeader>{data?.email}</UIHeader>
    </main>
  );
}
