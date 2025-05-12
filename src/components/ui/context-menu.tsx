"use client";

import { CheckIcon, ChevronRightIcon, CircleIcon } from "lucide-react";
import { ContextMenu as ContextMenuPrimitive } from "radix-ui";

import { cn } from "@/lib/cva";
import type { ComponentProps } from "react"; // Import ComponentProps

export interface ContextMenuProps
  extends ComponentProps<typeof ContextMenuPrimitive.Root> {}

export function ContextMenu({ ...props }: ContextMenuProps) {
  return <ContextMenuPrimitive.Root data-slot="context-menu" {...props} />;
}

export interface ContextMenuTriggerProps
  extends ComponentProps<typeof ContextMenuPrimitive.Trigger> {}

export function ContextMenuTrigger({ ...props }: ContextMenuTriggerProps) {
  return (
    <ContextMenuPrimitive.Trigger data-slot="context-menu-trigger" {...props} />
  );
}

export interface ContextMenuGroupProps
  extends ComponentProps<typeof ContextMenuPrimitive.Group> {}

export function ContextMenuGroup({ ...props }: ContextMenuGroupProps) {
  return (
    <ContextMenuPrimitive.Group data-slot="context-menu-group" {...props} />
  );
}

export interface ContextMenuPortalProps
  extends ComponentProps<typeof ContextMenuPrimitive.Portal> {}

export function ContextMenuPortal({ ...props }: ContextMenuPortalProps) {
  return (
    <ContextMenuPrimitive.Portal data-slot="context-menu-portal" {...props} />
  );
}

export interface ContextMenuSubProps
  extends ComponentProps<typeof ContextMenuPrimitive.Sub> {}

export function ContextMenuSub({ ...props }: ContextMenuSubProps) {
  return <ContextMenuPrimitive.Sub data-slot="context-menu-sub" {...props} />;
}

export interface ContextMenuRadioGroupProps
  extends ComponentProps<typeof ContextMenuPrimitive.RadioGroup> {}

export function ContextMenuRadioGroup({
  ...props
}: ContextMenuRadioGroupProps) {
  return (
    <ContextMenuPrimitive.RadioGroup
      data-slot="context-menu-radio-group"
      {...props}
    />
  );
}

export interface ContextMenuSubTriggerProps
  extends ComponentProps<typeof ContextMenuPrimitive.SubTrigger> {
  inset?: boolean;
}

export function ContextMenuSubTrigger({
  className,
  inset,
  children,
  ...props
}: ContextMenuSubTriggerProps) {
  return (
    <ContextMenuPrimitive.SubTrigger
      data-slot="context-menu-sub-trigger"
      data-inset={inset}
      className={cn(
        "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-hidden focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[inset]:pl-8 data-[state=open]:text-accent-foreground [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0",
        className
      )}
      {...props}
    >
      {children}
      <ChevronRightIcon className="ml-auto" />
    </ContextMenuPrimitive.SubTrigger>
  );
}

export interface ContextMenuSubContentProps
  extends ComponentProps<typeof ContextMenuPrimitive.SubContent> {}

export function ContextMenuSubContent({
  className,
  ...props
}: ContextMenuSubContentProps) {
  return (
    <ContextMenuPrimitive.SubContent
      data-slot="context-menu-sub-content"
      className={cn(
        "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] origin-(--radix-context-menu-content-transform-origin) overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=closed]:animate-out data-[state=open]:animate-in",
        className
      )}
      {...props}
    />
  );
}

export interface ContextMenuContentProps
  extends ComponentProps<typeof ContextMenuPrimitive.Content> {}

export function ContextMenuContent({
  className,
  ...props
}: ContextMenuContentProps) {
  return (
    <ContextMenuPrimitive.Portal>
      <ContextMenuPrimitive.Content
        data-slot="context-menu-content"
        className={cn(
          "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-h-(--radix-context-menu-content-available-height) min-w-[8rem] origin-(--radix-context-menu-content-transform-origin) overflow-y-auto overflow-x-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=closed]:animate-out data-[state=open]:animate-in",
          className
        )}
        {...props}
      />
    </ContextMenuPrimitive.Portal>
  );
}

export interface ContextMenuItemProps
  extends ComponentProps<typeof ContextMenuPrimitive.Item> {
  inset?: boolean;
  variant?: "default" | "destructive";
}

export function ContextMenuItem({
  className,
  inset,
  variant = "default",
  ...props
}: ContextMenuItemProps) {
  return (
    <ContextMenuPrimitive.Item
      data-slot="context-menu-item"
      data-inset={inset}
      data-variant={variant}
      className={cn(
        "data-[variant=destructive]:*:[svg]:!text-destructive relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[inset]:pl-8 data-[variant=destructive]:text-destructive data-[disabled]:opacity-50 data-[variant=destructive]:focus:bg-destructive/10 data-[variant=destructive]:focus:text-destructive dark:data-[variant=destructive]:focus:bg-destructive/20 [&_svg:not([class*='size-'])]:size-4 [&_svg:not([class*='text-'])]:text-muted-foreground [&_svg]:pointer-events-none [&_svg]:shrink-0",
        className
      )}
      {...props}
    />
  );
}

export interface ContextMenuCheckboxItemProps
  extends ComponentProps<typeof ContextMenuPrimitive.CheckboxItem> {}

export function ContextMenuCheckboxItem({
  className,
  children,
  checked,
  ...props
}: ContextMenuCheckboxItemProps) {
  return (
    <ContextMenuPrimitive.CheckboxItem
      data-slot="context-menu-checkbox-item"
      className={cn(
        "relative flex cursor-default select-none items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0",
        className
      )}
      checked={checked}
      {...props}
    >
      <span className="pointer-events-none absolute left-2 flex size-3.5 items-center justify-center">
        <ContextMenuPrimitive.ItemIndicator>
          <CheckIcon className="size-4" />
        </ContextMenuPrimitive.ItemIndicator>
      </span>
      {children}
    </ContextMenuPrimitive.CheckboxItem>
  );
}

export interface ContextMenuRadioItemProps
  extends ComponentProps<typeof ContextMenuPrimitive.RadioItem> {}

export function ContextMenuRadioItem({
  className,
  children,
  ...props
}: ContextMenuRadioItemProps) {
  return (
    <ContextMenuPrimitive.RadioItem
      data-slot="context-menu-radio-item"
      className={cn(
        "relative flex cursor-default select-none items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0",
        className
      )}
      {...props}
    >
      <span className="pointer-events-none absolute left-2 flex size-3.5 items-center justify-center">
        <ContextMenuPrimitive.ItemIndicator>
          <CircleIcon className="size-2 fill-current" />
        </ContextMenuPrimitive.ItemIndicator>
      </span>
      {children}
    </ContextMenuPrimitive.RadioItem>
  );
}

export interface ContextMenuLabelProps
  extends ComponentProps<typeof ContextMenuPrimitive.Label> {
  inset?: boolean;
}

export function ContextMenuLabel({
  className,
  inset,
  ...props
}: ContextMenuLabelProps) {
  return (
    <ContextMenuPrimitive.Label
      data-slot="context-menu-label"
      data-inset={inset}
      className={cn(
        "px-2 py-1.5 font-medium text-foreground text-sm data-[inset]:pl-8",
        className
      )}
      {...props}
    />
  );
}

export interface ContextMenuSeparatorProps
  extends ComponentProps<typeof ContextMenuPrimitive.Separator> {}

export function ContextMenuSeparator({
  className,
  ...props
}: ContextMenuSeparatorProps) {
  return (
    <ContextMenuPrimitive.Separator
      data-slot="context-menu-separator"
      className={cn("-mx-1 my-1 h-px bg-border", className)}
      {...props}
    />
  );
}

export interface ContextMenuShortcutProps extends ComponentProps<"span"> {}

export function ContextMenuShortcut({
  className,
  ...props
}: ContextMenuShortcutProps) {
  return (
    <span
      data-slot="context-menu-shortcut"
      className={cn(
        "ml-auto text-muted-foreground text-xs tracking-widest",
        className
      )}
      {...props}
    />
  );
}
