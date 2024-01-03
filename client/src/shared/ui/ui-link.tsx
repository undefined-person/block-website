import Link from "next/link";
import clsx from "clsx";

export type LinkProps = Parameters<typeof Link>[0];

export const UILink = ({ ...props }: LinkProps) => {
  return (
    <Link
      {...props}
      className={clsx(
        props.className,
        "p-1 text-blue-500 cursor-pointer hover:text-blue-700 transition-colors",
      )}
    />
  );
};
