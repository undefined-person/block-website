import clsx from "clsx";

import { UISpinner } from "./ui-spinner";

export const UIPageSpinner = ({ className }: { className?: string }) => {
  return (
    <div
      className={clsx(
        "fixed left-0 right-0 top-0 bottom-0 flex justify-center items-center bg-white",
        className,
      )}
    >
      <UISpinner />
      <UISpinner className="text-blue-500 w-24 h-24" />
    </div>
  );
};
