"use client";

import { AspectRatio as AspectRatioPrimitive } from "radix-ui";

export interface AspectRatioProps
  extends React.ComponentProps<typeof AspectRatioPrimitive.Root> {}

export function AspectRatio({ ...props }: AspectRatioProps) {
  return <AspectRatioPrimitive.Root data-slot="aspect-ratio" {...props} />;
}
