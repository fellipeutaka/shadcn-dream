"use client";

import { Progress as ProgressPrimitive } from "radix-ui";

import { cn } from "@/lib/cva";

export interface ProgressProps
  extends React.ComponentProps<typeof ProgressPrimitive.Root> {}

export function Progress({ className, value, ...props }: ProgressProps) {
  return (
    <ProgressPrimitive.Root
      data-slot="progress"
      className={cn(
        "relative h-2 w-full overflow-hidden rounded-full bg-primary/20",
        className
      )}
      {...props}
    >
      <ProgressPrimitive.Indicator
        data-slot="progress-indicator"
        className="h-full w-full flex-1 bg-primary transition-all"
        style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
      />
    </ProgressPrimitive.Root>
  );
}
