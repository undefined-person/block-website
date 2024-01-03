import { ButtonHTMLAttributes } from "react";
import clsx from "clsx";

export type ButtonVariant = "primary" | "secondary" | "outline";

export type ButtonProps = {
  variant: ButtonVariant;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const UIButton = ({ className, variant, ...props }: ButtonProps) => {
  return (
    <button
      className={clsx(
        className,
        "px-4 h-10 rounded flex gap-2 items-center justify-center transition-colors ",
        {
          primary:
            "bg-blue-500 text-white shadow shadow-blue-500 hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed",
          secondary:
            "bg-rose-500 text-white shadow shadow-rose-500 hover:bg-rose-700 disabled:opacity-50 disabled:cursor-not-allowed",
          outline:
            " text-blue-500 border border-blue-500 hover:text-white hover:bg-blue-500 disabled:opacity-50 disabled:cursor-not-allowed",
        }[variant],
      )}
      {...props}
    />
  );
};
