"use client";

import { ChevronRight, MoreHorizontal } from "lucide-react";
import { Slot } from "radix-ui";

import { cn } from "@/lib/cva";

export interface BreadcrumbProps extends React.ComponentProps<"nav"> {}

export function Breadcrumb({ ...props }: BreadcrumbProps) {
  return <nav aria-label="breadcrumb" data-slot="breadcrumb" {...props} />;
}

export interface BreadcrumbListProps extends React.ComponentProps<"ol"> {}

export function BreadcrumbList({ className, ...props }: BreadcrumbListProps) {
  return (
    <ol
      data-slot="breadcrumb-list"
      className={cn(
        "flex flex-wrap items-center gap-1.5 break-words text-muted-foreground text-sm sm:gap-2.5",
        className
      )}
      {...props}
    />
  );
}

export interface BreadcrumbItemProps extends React.ComponentProps<"li"> {}

export function BreadcrumbItem({ className, ...props }: BreadcrumbItemProps) {
  return (
    <li
      data-slot="breadcrumb-item"
      className={cn("inline-flex items-center gap-1.5", className)}
      {...props}
    />
  );
}

export interface BreadcrumbLinkProps extends React.ComponentProps<"a"> {
  asChild?: boolean;
}

export function BreadcrumbLink({
  asChild,
  className,
  ...props
}: BreadcrumbLinkProps) {
  const Comp = asChild ? Slot.Slot : "a";

  return (
    <Comp
      data-slot="breadcrumb-link"
      className={cn("transition-colors hover:text-foreground", className)}
      {...props}
    />
  );
}

export interface BreadcrumbPageProps extends React.ComponentProps<"span"> {}

export function BreadcrumbPage({ className, ...props }: BreadcrumbPageProps) {
  return (
    <span
      tabIndex={-1}
      data-slot="breadcrumb-page"
      role="link"
      aria-disabled="true"
      aria-current="page"
      className={cn("font-normal text-foreground", className)}
      {...props}
    />
  );
}

export interface BreadcrumbSeparatorProps extends React.ComponentProps<"li"> {}

export function BreadcrumbSeparator({
  children,
  className,
  ...props
}: BreadcrumbSeparatorProps) {
  return (
    <li
      data-slot="breadcrumb-separator"
      role="presentation"
      aria-hidden="true"
      className={cn("[&>svg]:size-3.5", className)}
      {...props}
    >
      {children ?? <ChevronRight />}
    </li>
  );
}

export interface BreadcrumbEllipsisProps extends React.ComponentProps<"span"> {}

export function BreadcrumbEllipsis({
  className,
  ...props
}: BreadcrumbEllipsisProps) {
  return (
    <span
      data-slot="breadcrumb-ellipsis"
      role="presentation"
      aria-hidden="true"
      className={cn("flex size-9 items-center justify-center", className)}
      {...props}
    >
      <MoreHorizontal className="size-4" />
      <span className="sr-only">More</span>
    </span>
  );
}
