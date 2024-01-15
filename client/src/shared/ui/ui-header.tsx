import { ReactNode } from "react";
import clsx from "clsx";

import { UILogo } from "./ui-logo";

export const UIHeader = ({
  className,
  children,
}: {
  className?: string;
  children?: ReactNode;
}) => {
  return (
    <header
      className={clsx(
        "px-4 py-5 border-b border-b-slate-300 justify-between flex items-center bg-white",
        className,
      )}
    >
      <UILogo />
      {children}
    </header>
  );
};
