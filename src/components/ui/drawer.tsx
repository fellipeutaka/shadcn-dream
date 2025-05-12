"use client";

import { Drawer as DrawerPrimitive } from "vaul";

import { cn } from "@/lib/cva";

export type DrawerProps = React.ComponentProps<typeof DrawerPrimitive.Root>;

export function Drawer({ ...props }: DrawerProps) {
  return <DrawerPrimitive.Root data-slot="drawer" {...props} />;
}

export interface DrawerTriggerProps
  extends React.ComponentProps<typeof DrawerPrimitive.Trigger> {}

export function DrawerTrigger({ ...props }: DrawerTriggerProps) {
  return <DrawerPrimitive.Trigger data-slot="drawer-trigger" {...props} />;
}

export interface DrawerPortalProps
  extends React.ComponentProps<typeof DrawerPrimitive.Portal> {}

export function DrawerPortal({ ...props }: DrawerPortalProps) {
  return <DrawerPrimitive.Portal data-slot="drawer-portal" {...props} />;
}

export interface DrawerCloseProps
  extends React.ComponentProps<typeof DrawerPrimitive.Close> {}

export function DrawerClose({ ...props }: DrawerCloseProps) {
  return <DrawerPrimitive.Close data-slot="drawer-close" {...props} />;
}

export interface DrawerOverlayProps
  extends React.ComponentProps<typeof DrawerPrimitive.Overlay> {}

export function DrawerOverlay({ className, ...props }: DrawerOverlayProps) {
  return (
    <DrawerPrimitive.Overlay
      data-slot="drawer-overlay"
      className={cn(
        "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50 data-[state=closed]:animate-out data-[state=open]:animate-in",
        className
      )}
      {...props}
    />
  );
}

export interface DrawerContentProps
  extends React.ComponentProps<typeof DrawerPrimitive.Content> {}

export function DrawerContent({
  className,
  children,
  ...props
}: DrawerContentProps) {
  return (
    <DrawerPortal data-slot="drawer-portal">
      <DrawerOverlay />
      <DrawerPrimitive.Content
        data-slot="drawer-content"
        className={cn(
          "group/drawer-content fixed z-50 flex h-auto flex-col bg-background",
          "data-[vaul-drawer-direction=top]:inset-x-0 data-[vaul-drawer-direction=top]:top-0 data-[vaul-drawer-direction=top]:mb-24 data-[vaul-drawer-direction=top]:max-h-[80vh] data-[vaul-drawer-direction=top]:rounded-b-lg data-[vaul-drawer-direction=top]:border-b",
          "data-[vaul-drawer-direction=bottom]:inset-x-0 data-[vaul-drawer-direction=bottom]:bottom-0 data-[vaul-drawer-direction=bottom]:mt-24 data-[vaul-drawer-direction=bottom]:max-h-[80vh] data-[vaul-drawer-direction=bottom]:rounded-t-lg data-[vaul-drawer-direction=bottom]:border-t",
          "data-[vaul-drawer-direction=right]:inset-y-0 data-[vaul-drawer-direction=right]:right-0 data-[vaul-drawer-direction=right]:w-3/4 data-[vaul-drawer-direction=right]:border-l data-[vaul-drawer-direction=right]:sm:max-w-sm",
          "data-[vaul-drawer-direction=left]:inset-y-0 data-[vaul-drawer-direction=left]:left-0 data-[vaul-drawer-direction=left]:w-3/4 data-[vaul-drawer-direction=left]:border-r data-[vaul-drawer-direction=left]:sm:max-w-sm",
          className
        )}
        {...props}
      >
        <div className="mx-auto mt-4 hidden h-2 w-[100px] shrink-0 rounded-full bg-muted group-data-[vaul-drawer-direction=bottom]/drawer-content:block" />
        {children}
      </DrawerPrimitive.Content>
    </DrawerPortal>
  );
}

export interface DrawerHeaderProps extends React.ComponentProps<"div"> {}

export function DrawerHeader({ className, ...props }: DrawerHeaderProps) {
  return (
    <div
      data-slot="drawer-header"
      className={cn("flex flex-col gap-1.5 p-4", className)}
      {...props}
    />
  );
}

export interface DrawerFooterProps extends React.ComponentProps<"div"> {}

export function DrawerFooter({ className, ...props }: DrawerFooterProps) {
  return (
    <div
      data-slot="drawer-footer"
      className={cn("mt-auto flex flex-col gap-2 p-4", className)}
      {...props}
    />
  );
}

export interface DrawerTitleProps
  extends React.ComponentProps<typeof DrawerPrimitive.Title> {}

export function DrawerTitle({ className, ...props }: DrawerTitleProps) {
  return (
    <DrawerPrimitive.Title
      data-slot="drawer-title"
      className={cn("font-semibold text-foreground", className)}
      {...props}
    />
  );
}

export interface DrawerDescriptionProps
  extends React.ComponentProps<typeof DrawerPrimitive.Description> {}

export function DrawerDescription({
  className,
  ...props
}: DrawerDescriptionProps) {
  return (
    <DrawerPrimitive.Description
      data-slot="drawer-description"
      className={cn("text-muted-foreground text-sm", className)}
      {...props}
    />
  );
}
