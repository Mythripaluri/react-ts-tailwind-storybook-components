import React from "react";

export type InputVariant = "filled" | "outlined" | "ghost";
export type InputSize = "sm" | "md" | "lg";

export interface InputFieldProps {
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  placeholder?: string;
  helperText?: string;
  errorMessage?: string;
  disabled?: boolean;
  invalid?: boolean;
  loading?: boolean;
  variant?: InputVariant;
  size?: InputSize;
  type?: React.HTMLInputTypeAttribute;
  clearable?: boolean;
  passwordToggle?: boolean;
  id?: string;
}

const sizeClasses: Record<InputSize, string> = {
  sm: "text-sm py-2 px-3",
  md: "text-base py-2.5 px-3.5",
  lg: "text-lg py-3 px-4",
};

const variantClasses: Record<InputVariant, string> = {
  outlined: "if-base if-outlined",
  filled: "if-base if-filled",
  ghost: "if-base if-ghost",
};

export const InputField = React.forwardRef<HTMLInputElement, InputFieldProps>(
  (
    {
      value,
      onChange,
      label,
      placeholder,
      helperText,
      errorMessage,
      disabled,
      invalid,
      loading,
      variant = "outlined",
      size = "md",
      type = "text",
      clearable = false,
      passwordToggle = false,
      id,
    },
    ref
  ) => {
    const [localValue, setLocalValue] = React.useState("");
    const [showPassword, setShowPassword] = React.useState(false);

    const controlled = value !== undefined;
    const inputValue = controlled ? value! : localValue;

    const generatedId = React.useId();
    const inputId = id ?? generatedId;
    const helpId = helperText ? `${inputId}-help` : undefined;
    const errorId = errorMessage ? `${inputId}-error` : undefined;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (!controlled) setLocalValue(e.target.value);
      onChange?.(e);
    };

    const classes = [
      variantClasses[variant],
      sizeClasses[size],
      invalid ? "border-red-500 focus:ring-red-500" : "",
      "pr-10",
    ]
      .filter(Boolean)
      .join(" ");

    const effectiveType = passwordToggle
      ? showPassword
        ? "text"
        : "password"
      : type;
    return (
      <div className="w-full">
        {label && (
          <label
            htmlFor={inputId}
            className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            {label}
          </label>
        )}
        <div className="relative">
          <input
            ref={ref}
            id={inputId}
            className={classes}
            placeholder={placeholder}
            value={inputValue}
            onChange={handleChange}
            disabled={disabled || loading}
            aria-invalid={invalid || undefined}
            aria-describedby={
              [helpId, errorId].filter(Boolean).join(" ") || undefined
            }
            type={effectiveType}
          />

          {/* Right-side controls */}
          <div className="absolute inset-y-0 right-2 flex items-center gap-1">
            {loading && (
              <span
                aria-label="Loading"
                className="h-4 w-4 animate-spin rounded-full border-2 border-gray-400 border-t-transparent"
              />
            )}
            {passwordToggle && type === "password" && (
              <button
                type="button"
                onClick={() => setShowPassword((s) => !s)}
                className="text-xs px-2 py-1 rounded-md bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600"
                aria-label={showPassword ? "Hide password" : "Show password"}
                tabIndex={-1}
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            )}
            {clearable && inputValue && (
              <button
                type="button"
                onClick={() => {
                  const ev = {
                    target: { value: "" },
                  } as unknown as React.ChangeEvent<HTMLInputElement>;
                  if (!controlled) setLocalValue("");
                  onChange?.(ev);
                }}
                className="text-xs px-2 py-1 rounded-md bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600"
                aria-label="Clear input"
                tabIndex={-1}
              >
                Clear
              </button>
            )}
          </div>
        </div>
        {helperText && !errorMessage && (
          <p
            id={helpId}
            className="mt-1 text-xs text-gray-500 dark:text-gray-400"
          >
            {helperText}
          </p>
        )}
        {errorMessage && (
          <p id={errorId} className="mt-1 text-xs text-red-600">
            {errorMessage}
          </p>
        )}
      </div>
    );
  }
);
InputField.displayName = "InputField";
