import { useRouter } from "next/router";
import { PropsWithChildren, ReactElement } from "react";

import { ROUTES } from "@/shared/const/routes";
import { UIPageSpinner } from "@/shared/ui/ui-page-spinner";
import { useSessionQuery } from "@/entities/session/queries";

export function protectedPage<P>(Component: (props: P) => ReactElement) {
  return function ProtectedPage(props: PropsWithChildren<P>) {
    const router = useRouter();
    const { isPending, isError } = useSessionQuery();

    if (isPending) {
      return <UIPageSpinner />;
    }

    if (isError) {
      router.replace(ROUTES.SIGN_IN);
    }

    return <Component {...props} />;
  };
}
