"use client";

import { OTPInput, OTPInputContext } from "input-otp";
import { MinusIcon } from "lucide-react";

import { cn } from "@/lib/cva";
import { useContext } from "react";

export type InputOTPProps = React.ComponentProps<typeof OTPInput> & {
  containerClassName?: string;
};

export function InputOTP({
  className,
  containerClassName,
  ...props
}: InputOTPProps) {
  return (
    <OTPInput
      data-slot="input-otp"
      containerClassName={cn(
        "flex items-center gap-2 has-disabled:opacity-50",
        containerClassName
      )}
      className={cn("disabled:cursor-not-allowed", className)}
      {...props}
    />
  );
}

export interface InputOTPGroupProps extends React.ComponentProps<"div"> {}

export function InputOTPGroup({ className, ...props }: InputOTPGroupProps) {
  return (
    <div
      data-slot="input-otp-group"
      className={cn("flex items-center", className)}
      {...props}
    />
  );
}

export interface InputOTPSlotProps extends React.ComponentProps<"div"> {
  index: number;
}

export function InputOTPSlot({
  index,
  className,
  ...props
}: InputOTPSlotProps) {
  const inputOTPContext = useContext(OTPInputContext);
  const { char, hasFakeCaret, isActive } = inputOTPContext?.slots[index] ?? {};

  return (
    <div
      data-slot="input-otp-slot"
      data-active={isActive}
      className={cn(
        "relative flex h-9 w-9 items-center justify-center border-input border-y border-r text-sm shadow-xs outline-none transition-all first:rounded-l-md first:border-l last:rounded-r-md aria-invalid:border-destructive data-[active=true]:z-10 data-[active=true]:border-ring data-[active=true]:ring-[3px] data-[active=true]:ring-ring/50 data-[active=true]:aria-invalid:border-destructive data-[active=true]:aria-invalid:ring-destructive/20 dark:bg-input/30 dark:data-[active=true]:aria-invalid:ring-destructive/40",
        className
      )}
      {...props}
    >
      {char}
      {hasFakeCaret && (
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="h-4 w-px animate-caret-blink bg-foreground duration-1000" />
        </div>
      )}
    </div>
  );
}

export interface InputOTPSeparatorProps extends React.ComponentProps<"div"> {}

export function InputOTPSeparator({ ...props }: InputOTPSeparatorProps) {
  return (
    <div
      tabIndex={-1}
      data-slot="input-otp-separator"
      // biome-ignore lint/a11y/useSemanticElements: <explanation>
      role="separator"
      {...props}
    >
      <MinusIcon />
    </div>
  );
}
