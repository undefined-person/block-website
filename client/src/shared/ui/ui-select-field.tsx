import clsx from "clsx";
import { PropsWithRef, SelectHTMLAttributes, useId } from "react";

export type SelectOption = {
  label: string;
  value: string;
};

export type SelectFieldProps = {
  className?: string;
  label?: string;
  error?: string;
  selectProps?: PropsWithRef<SelectHTMLAttributes<HTMLSelectElement>>;
  options: SelectOption[];
};

export const UISelectField = ({
  className,
  error,
  selectProps,
  label,
  options,
}: SelectFieldProps) => {
  const id = useId();
  return (
    <div className={clsx(className, "flex flex-col gap-1")}>
      {label && (
        <label htmlFor={id} className="block">
          {label}
        </label>
      )}
      <select
        {...selectProps}
        className={clsx(
          selectProps?.className,
          "rounded border border-slate-300 focus:border-blue-500 outline-none px-2 h-10",
        )}
        id={id}
      >
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && <p className="text-rose-500 text-sm">{error}</p>}
    </div>
  );
};
