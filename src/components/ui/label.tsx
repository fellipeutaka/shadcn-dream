"use client";

import { Label as LabelPrimitive } from "radix-ui";

import { cn } from "@/lib/cva";

export interface LabelProps
  extends React.ComponentProps<typeof LabelPrimitive.Root> {}

export function Label({ className, ...props }: LabelProps) {
  return (
    <LabelPrimitive.Root
      data-slot="label"
      className={cn(
        "flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
        className
      )}
      {...props}
    />
  );
}
