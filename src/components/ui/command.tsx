"use client";

import { Command as CommandPrimitive } from "cmdk";
import { SearchIcon } from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  type DialogProps,
  DialogTitle,
} from "@/components/ui/dialog";
import { cn } from "@/lib/cva";

export interface CommandProps
  extends React.ComponentProps<typeof CommandPrimitive> {}

export function Command({ className, ...props }: CommandProps) {
  return (
    <CommandPrimitive
      data-slot="command"
      className={cn(
        "flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground",
        className
      )}
      {...props}
    />
  );
}

export interface CommandDialogProps extends DialogProps {
  title?: string;
  description?: string;
}

export function CommandDialog({
  title = "Command Palette",
  description = "Search for a command to run...",
  children,
  ...props
}: CommandDialogProps) {
  return (
    <Dialog {...props}>
      <DialogHeader className="sr-only">
        <DialogTitle>{title}</DialogTitle>
        <DialogDescription>{description}</DialogDescription>
      </DialogHeader>
      <DialogContent className="overflow-hidden p-0">
        <Command className="**:data-[slot=command-input-wrapper]:h-12 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5">
          {children}
        </Command>
      </DialogContent>
    </Dialog>
  );
}

export interface CommandInputProps
  extends React.ComponentProps<typeof CommandPrimitive.Input> {}

export function CommandInput({ className, ...props }: CommandInputProps) {
  return (
    <div
      data-slot="command-input-wrapper"
      className="flex h-9 items-center gap-2 border-b px-3"
    >
      <SearchIcon className="size-4 shrink-0 opacity-50" />
      <CommandPrimitive.Input
        data-slot="command-input"
        className={cn(
          "flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-hidden placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        {...props}
      />
    </div>
  );
}

export interface CommandListProps
  extends React.ComponentProps<typeof CommandPrimitive.List> {}

export function CommandList({ className, ...props }: CommandListProps) {
  return (
    <CommandPrimitive.List
      data-slot="command-list"
      className={cn(
        "max-h-[300px] scroll-py-1 overflow-y-auto overflow-x-hidden",
        className
      )}
      {...props}
    />
  );
}

export interface CommandEmptyProps
  extends React.ComponentProps<typeof CommandPrimitive.Empty> {}

export function CommandEmpty({ ...props }: CommandEmptyProps) {
  return (
    <CommandPrimitive.Empty
      data-slot="command-empty"
      className="py-6 text-center text-sm"
      {...props}
    />
  );
}

export interface CommandGroupProps
  extends React.ComponentProps<typeof CommandPrimitive.Group> {}

export function CommandGroup({ className, ...props }: CommandGroupProps) {
  return (
    <CommandPrimitive.Group
      data-slot="command-group"
      className={cn(
        "overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group-heading]]:text-xs",
        className
      )}
      {...props}
    />
  );
}

export interface CommandSeparatorProps
  extends React.ComponentProps<typeof CommandPrimitive.Separator> {}

export function CommandSeparator({
  className,
  ...props
}: CommandSeparatorProps) {
  return (
    <CommandPrimitive.Separator
      data-slot="command-separator"
      className={cn("-mx-1 h-px bg-border", className)}
      {...props}
    />
  );
}

export interface CommandItemProps
  extends React.ComponentProps<typeof CommandPrimitive.Item> {}

export function CommandItem({ className, ...props }: CommandItemProps) {
  return (
    <CommandPrimitive.Item
      data-slot="command-item"
      className={cn(
        "relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden data-[disabled=true]:pointer-events-none data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground data-[disabled=true]:opacity-50 [&_svg:not([class*='size-'])]:size-4 [&_svg:not([class*='text-'])]:text-muted-foreground [&_svg]:pointer-events-none [&_svg]:shrink-0",
        className
      )}
      {...props}
    />
  );
}

export interface CommandShortcutProps extends React.ComponentProps<"span"> {}

export function CommandShortcut({ className, ...props }: CommandShortcutProps) {
  return (
    <span
      data-slot="command-shortcut"
      className={cn(
        "ml-auto text-muted-foreground text-xs tracking-widest",
        className
      )}
      {...props}
    />
  );
}
