## shadcn-dream

An opinionated code style for [shadcn/ui](https://ui.shadcn.com) components. The components, classes, and behavior stay exactly as shadcn ships them; shadcn-dream changes only the shape of the code, so it works with every shadcn base: Base UI (the default), Radix UI, and React Aria.

### Conventions

- **`cva` beta via `lib/cva`**: variants use [`cva`](https://beta.cva.style) 1.0 beta instead of `class-variance-authority`. `lib/cva.ts` configures it once with `defineConfig` and exports `cva` and `cn`, so every component imports both from there. Calls use the object form, `cva({ base, variants, defaultVariants })`.
- **`className` goes into the variants call**: `buttonVariants({ variant, size, className })` instead of `cn(buttonVariants({ variant, size }), className)`. The configured `cva` already merges conflicting Tailwind classes.
- **Exported props**: every component and sub-component has an exported `<Name>Props` interface, so wrapping and extending components stays type-safe.
- **Export at the declaration**: `export function Button` and `export const buttonVariants`, with no trailing `export { ... }` block.
- **No `React` namespace import**: types come from the global `React` namespace (`React.ComponentProps<"div">`) and runtime APIs are named imports (`import { useState } from "react"`).
- **Named third-party imports**: `import { Panel, PanelGroup } from "react-resizable-panels"` instead of `import * as ResizablePrimitive`.
- **Global CSS base layer**: smooth scrolling, a thin themed scrollbar, `color-scheme` for light and dark, antialiased text, `text-rendering: optimizeLegibility`, and no synthesized bold.

Radix projects get the `radix-ui` package from shadcn itself: new Radix components already import from it, and older ones are migrated with `npx shadcn@latest migrate radix`.

### Using it in your project

The shadcn CLI always writes plain shadcn code. The [`shadcn-dream` agent skill](https://github.com/fellipeutaka/leon/tree/main/skills/shadcn-dream) extends the official shadcn skill so that an AI coding agent:

- migrates a project on the default shadcn setup (setup and components) to this style;
- rewrites every file the CLI adds or updates in a project already in this style.

Both end with an audit script that checks the result.

```bash
npx skills add fellipeutaka/leon --skill shadcn-dream
```
