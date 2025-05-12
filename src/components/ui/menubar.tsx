"use client";

import { CheckIcon, ChevronRightIcon, CircleIcon } from "lucide-react";
import { Menubar as MenubarPrimitive } from "radix-ui";

import { cn } from "@/lib/cva";

export interface MenubarProps
  extends React.ComponentProps<typeof MenubarPrimitive.Root> {}

export function Menubar({ className, ...props }: MenubarProps) {
  return (
    <MenubarPrimitive.Root
      data-slot="menubar"
      className={cn(
        "flex h-9 items-center gap-1 rounded-md border bg-background p-1 shadow-xs",
        className
      )}
      {...props}
    />
  );
}

export interface MenubarMenuProps
  extends React.ComponentProps<typeof MenubarPrimitive.Menu> {}

export function MenubarMenu({ ...props }: MenubarMenuProps) {
  return <MenubarPrimitive.Menu data-slot="menubar-menu" {...props} />;
}

export interface MenubarGroupProps
  extends React.ComponentProps<typeof MenubarPrimitive.Group> {}

export function MenubarGroup({ ...props }: MenubarGroupProps) {
  return <MenubarPrimitive.Group data-slot="menubar-group" {...props} />;
}

export interface MenubarPortalProps
  extends React.ComponentProps<typeof MenubarPrimitive.Portal> {}

export function MenubarPortal({ ...props }: MenubarPortalProps) {
  return <MenubarPrimitive.Portal data-slot="menubar-portal" {...props} />;
}

export interface MenubarRadioGroupProps
  extends React.ComponentProps<typeof MenubarPrimitive.RadioGroup> {}

export function MenubarRadioGroup({ ...props }: MenubarRadioGroupProps) {
  return (
    <MenubarPrimitive.RadioGroup data-slot="menubar-radio-group" {...props} />
  );
}

export interface MenubarTriggerProps
  extends React.ComponentProps<typeof MenubarPrimitive.Trigger> {}

export function MenubarTrigger({ className, ...props }: MenubarTriggerProps) {
  return (
    <MenubarPrimitive.Trigger
      data-slot="menubar-trigger"
      className={cn(
        "flex select-none items-center rounded-sm px-2 py-1 font-medium text-sm outline-hidden focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground",
        className
      )}
      {...props}
    />
  );
}

export interface MenubarContentProps
  extends React.ComponentProps<typeof MenubarPrimitive.Content> {}

export function MenubarContent({
  className,
  align = "start",
  alignOffset = -4,
  sideOffset = 8,
  ...props
}: MenubarContentProps) {
  return (
    <MenubarPortal>
      <MenubarPrimitive.Content
        data-slot="menubar-content"
        align={align}
        alignOffset={alignOffset}
        sideOffset={sideOffset}
        className={cn(
          "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[12rem] origin-(--radix-menubar-content-transform-origin) overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in",
          className
        )}
        {...props}
      />
    </MenubarPortal>
  );
}

export interface MenubarItemProps
  extends React.ComponentProps<typeof MenubarPrimitive.Item> {
  inset?: boolean;
  variant?: "default" | "destructive";
}

export function MenubarItem({
  className,
  inset,
  variant = "default",
  ...props
}: MenubarItemProps) {
  return (
    <MenubarPrimitive.Item
      data-slot="menubar-item"
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

export interface MenubarCheckboxItemProps
  extends React.ComponentProps<typeof MenubarPrimitive.CheckboxItem> {}

export function MenubarCheckboxItem({
  className,
  children,
  checked,
  ...props
}: MenubarCheckboxItemProps) {
  return (
    <MenubarPrimitive.CheckboxItem
      data-slot="menubar-checkbox-item"
      className={cn(
        "relative flex cursor-default select-none items-center gap-2 rounded-xs py-1.5 pr-2 pl-8 text-sm outline-hidden focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0",
        className
      )}
      checked={checked}
      {...props}
    >
      <span className="pointer-events-none absolute left-2 flex size-3.5 items-center justify-center">
        <MenubarPrimitive.ItemIndicator>
          <CheckIcon className="size-4" />
        </MenubarPrimitive.ItemIndicator>
      </span>
      {children}
    </MenubarPrimitive.CheckboxItem>
  );
}

export interface MenubarRadioItemProps
  extends React.ComponentProps<typeof MenubarPrimitive.RadioItem> {}

export function MenubarRadioItem({
  className,
  children,
  ...props
}: MenubarRadioItemProps) {
  return (
    <MenubarPrimitive.RadioItem
      data-slot="menubar-radio-item"
      className={cn(
        "relative flex cursor-default select-none items-center gap-2 rounded-xs py-1.5 pr-2 pl-8 text-sm outline-hidden focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0",
        className
      )}
      {...props}
    >
      <span className="pointer-events-none absolute left-2 flex size-3.5 items-center justify-center">
        <MenubarPrimitive.ItemIndicator>
          <CircleIcon className="size-2 fill-current" />
        </MenubarPrimitive.ItemIndicator>
      </span>
      {children}
    </MenubarPrimitive.RadioItem>
  );
}

export interface MenubarLabelProps
  extends React.ComponentProps<typeof MenubarPrimitive.Label> {
  inset?: boolean;
}

export function MenubarLabel({
  className,
  inset,
  ...props
}: MenubarLabelProps) {
  return (
    <MenubarPrimitive.Label
      data-slot="menubar-label"
      data-inset={inset}
      className={cn(
        "px-2 py-1.5 font-medium text-sm data-[inset]:pl-8",
        className
      )}
      {...props}
    />
  );
}

export interface MenubarSeparatorProps
  extends React.ComponentProps<typeof MenubarPrimitive.Separator> {}

export function MenubarSeparator({
  className,
  ...props
}: MenubarSeparatorProps) {
  return (
    <MenubarPrimitive.Separator
      data-slot="menubar-separator"
      className={cn("-mx-1 my-1 h-px bg-border", className)}
      {...props}
    />
  );
}

export interface MenubarShortcutProps extends React.ComponentProps<"span"> {}

export function MenubarShortcut({ className, ...props }: MenubarShortcutProps) {
  return (
    <span
      data-slot="menubar-shortcut"
      className={cn(
        "ml-auto text-muted-foreground text-xs tracking-widest",
        className
      )}
      {...props}
    />
  );
}

export interface MenubarSubProps
  extends React.ComponentProps<typeof MenubarPrimitive.Sub> {}

export function MenubarSub({ ...props }: MenubarSubProps) {
  return <MenubarPrimitive.Sub data-slot="menubar-sub" {...props} />;
}

export interface MenubarSubTriggerProps
  extends React.ComponentProps<typeof MenubarPrimitive.SubTrigger> {
  inset?: boolean;
}

export function MenubarSubTrigger({
  className,
  inset,
  children,
  ...props
}: MenubarSubTriggerProps) {
  return (
    <MenubarPrimitive.SubTrigger
      data-slot="menubar-sub-trigger"
      data-inset={inset}
      className={cn(
        "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[inset]:pl-8 data-[state=open]:text-accent-foreground",
        className
      )}
      {...props}
    >
      {children}
      <ChevronRightIcon className="ml-auto h-4 w-4" />
    </MenubarPrimitive.SubTrigger>
  );
}

export interface MenubarSubContentProps
  extends React.ComponentProps<typeof MenubarPrimitive.SubContent> {}

export function MenubarSubContent({
  className,
  ...props
}: MenubarSubContentProps) {
  return (
    <MenubarPrimitive.SubContent
      data-slot="menubar-sub-content"
      className={cn(
        "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] origin-(--radix-menubar-content-transform-origin) overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=closed]:animate-out data-[state=open]:animate-in",
        className
      )}
      {...props}
    />
  );
}
