## shadcn-dream

This project is a customized version of the components from shadcn/ui. While shadcn/ui provides an excellent foundation, `shadcn-dream` incorporates several enhancements and modifications to better suit specific development preferences and needs.

### Why shadcn-dream?

Here are the key reasons and changes that differentiate `shadcn-dream` from the standard shadcn/ui:

- **Updated `class-variance-authority` (cva)**: Utilizes the latest version of `class-variance-authority`, referred to as `cva`, for managing component variants.
- **Enhanced Global CSS**: Includes improvements to the default CSS, such as:
  - `scroll-behavior: smooth;` applied to the `html` element for smoother page scrolling.
  - Font anti-aliasing (`-webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale;`) applied to the `body` for crisper text rendering.
- **Radix UI Monopackage**: Employs the `radix-ui` monopackage instead of installing individual Radix UI primitive packages (e.g., `@radix-ui/react-select`, `@radix-ui/react-dialog`). This can simplify dependency management.
- **Exported Component Props**: All component and sub-component props are exported, offering greater flexibility and type safety when extending or wrapping components.
