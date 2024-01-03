import clsx from "clsx";
import { InputHTMLAttributes, PropsWithRef, useId } from "react";

export type TextFieldProps = {
  className?: string;
  label?: string;
  error?: string;
  inputProps?: PropsWithRef<InputHTMLAttributes<HTMLInputElement>>;
};

export const UITextField = ({
  className,
  error,
  inputProps,
  label,
}: TextFieldProps) => {
  const id = useId();
  return (
    <div className={clsx(className, "flex flex-col gap-1")}>
      {label && (
        <label htmlFor={id} className="block">
          {label}
        </label>
      )}
      <input
        {...inputProps}
        className={clsx(
          inputProps?.className,
          "rounded border border-slate-300 focus:border-blue-500 outline-none px-2 h-10",
        )}
        id={id}
      />
      {error && <p className="text-rose-500 text-sm">{error}</p>}
    </div>
  );
};
