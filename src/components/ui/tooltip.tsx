"use client";

import { Tooltip as TooltipPrimitive } from "radix-ui";

import { cn } from "@/lib/cva";

export interface TooltipProviderProps
  extends React.ComponentProps<typeof TooltipPrimitive.Provider> {}

export function TooltipProvider({
  delayDuration = 0,
  ...props
}: TooltipProviderProps) {
  return (
    <TooltipPrimitive.Provider
      data-slot="tooltip-provider"
      delayDuration={delayDuration}
      {...props}
    />
  );
}

export interface TooltipProps
  extends React.ComponentProps<typeof TooltipPrimitive.Root> {}

export function Tooltip({ ...props }: TooltipProps) {
  return (
    <TooltipProvider>
      <TooltipPrimitive.Root data-slot="tooltip" {...props} />
    </TooltipProvider>
  );
}

export interface TooltipTriggerProps
  extends React.ComponentProps<typeof TooltipPrimitive.Trigger> {}

export function TooltipTrigger({ ...props }: TooltipTriggerProps) {
  return <TooltipPrimitive.Trigger data-slot="tooltip-trigger" {...props} />;
}

export interface TooltipContentProps
  extends React.ComponentProps<typeof TooltipPrimitive.Content> {}

export function TooltipContent({
  className,
  sideOffset = 0,
  children,
  ...props
}: TooltipContentProps) {
  return (
    <TooltipPrimitive.Portal>
      <TooltipPrimitive.Content
        data-slot="tooltip-content"
        sideOffset={sideOffset}
        className={cn(
          "fade-in-0 zoom-in-95 data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-fit origin-(--radix-tooltip-content-transform-origin) animate-in text-balance rounded-md bg-primary px-3 py-1.5 text-primary-foreground text-xs data-[state=closed]:animate-out",
          className
        )}
        {...props}
      >
        {children}
        <TooltipPrimitive.Arrow className="z-50 size-2.5 translate-y-[calc(-50%_-_2px)] rotate-45 rounded-[2px] bg-primary fill-primary" />
      </TooltipPrimitive.Content>
    </TooltipPrimitive.Portal>
  );
}
