"use client";

import { AlertDialog as AlertDialogPrimitive } from "radix-ui";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/cva";

export interface AlertDialogProps
  extends React.ComponentProps<typeof AlertDialogPrimitive.Root> {}

export function AlertDialog({ ...props }: AlertDialogProps) {
  return <AlertDialogPrimitive.Root data-slot="alert-dialog" {...props} />;
}

export interface AlertDialogTriggerProps
  extends React.ComponentProps<typeof AlertDialogPrimitive.Trigger> {}

export function AlertDialogTrigger({ ...props }: AlertDialogTriggerProps) {
  return (
    <AlertDialogPrimitive.Trigger data-slot="alert-dialog-trigger" {...props} />
  );
}

export interface AlertDialogPortalProps
  extends React.ComponentProps<typeof AlertDialogPrimitive.Portal> {}

export function AlertDialogPortal({ ...props }: AlertDialogPortalProps) {
  return (
    <AlertDialogPrimitive.Portal data-slot="alert-dialog-portal" {...props} />
  );
}

export interface AlertDialogOverlayProps
  extends React.ComponentProps<typeof AlertDialogPrimitive.Overlay> {}

export function AlertDialogOverlay({
  className,
  ...props
}: AlertDialogOverlayProps) {
  return (
    <AlertDialogPrimitive.Overlay
      data-slot="alert-dialog-overlay"
      className={cn(
        "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50 data-[state=closed]:animate-out data-[state=open]:animate-in",
        className
      )}
      {...props}
    />
  );
}

export interface AlertDialogContentProps
  extends React.ComponentProps<typeof AlertDialogPrimitive.Content> {}

export function AlertDialogContent({
  className,
  ...props
}: AlertDialogContentProps) {
  return (
    <AlertDialogPortal>
      <AlertDialogOverlay />
      <AlertDialogPrimitive.Content
        data-slot="alert-dialog-content"
        className={cn(
          "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border bg-background p-6 shadow-lg duration-200 data-[state=closed]:animate-out data-[state=open]:animate-in sm:max-w-lg",
          className
        )}
        {...props}
      />
    </AlertDialogPortal>
  );
}

export interface AlertDialogHeaderProps extends React.ComponentProps<"div"> {}

export function AlertDialogHeader({
  className,
  ...props
}: AlertDialogHeaderProps) {
  return (
    <div
      data-slot="alert-dialog-header"
      className={cn("flex flex-col gap-2 text-center sm:text-left", className)}
      {...props}
    />
  );
}

export interface AlertDialogFooterProps extends React.ComponentProps<"div"> {}

export function AlertDialogFooter({
  className,
  ...props
}: AlertDialogFooterProps) {
  return (
    <div
      data-slot="alert-dialog-footer"
      className={cn(
        "flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
        className
      )}
      {...props}
    />
  );
}

export interface AlertDialogTitleProps
  extends React.ComponentProps<typeof AlertDialogPrimitive.Title> {}

export function AlertDialogTitle({
  className,
  ...props
}: AlertDialogTitleProps) {
  return (
    <AlertDialogPrimitive.Title
      data-slot="alert-dialog-title"
      className={cn("font-semibold text-lg", className)}
      {...props}
    />
  );
}

export interface AlertDialogDescriptionProps
  extends React.ComponentProps<typeof AlertDialogPrimitive.Description> {}

export function AlertDialogDescription({
  className,
  ...props
}: AlertDialogDescriptionProps) {
  return (
    <AlertDialogPrimitive.Description
      data-slot="alert-dialog-description"
      className={cn("text-muted-foreground text-sm", className)}
      {...props}
    />
  );
}

export interface AlertDialogActionProps
  extends React.ComponentProps<typeof AlertDialogPrimitive.Action> {}

export function AlertDialogAction({
  className,
  ...props
}: AlertDialogActionProps) {
  return (
    <AlertDialogPrimitive.Action
      className={cn(buttonVariants(), className)}
      {...props}
    />
  );
}

export interface AlertDialogCancelProps
  extends React.ComponentProps<typeof AlertDialogPrimitive.Cancel> {}

export function AlertDialogCancel({
  className,
  ...props
}: AlertDialogCancelProps) {
  return (
    <AlertDialogPrimitive.Cancel
      className={cn(buttonVariants({ variant: "outline" }), className)}
      {...props}
    />
  );
}
