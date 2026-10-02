import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { Loader2 } from "lucide-react";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-semibold cursor-pointer transition-[background-color,color,box-shadow,transform,filter] duration-(--xw-motion-duration-fast) ease-(--xw-motion-easing-standard) disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed aria-busy:cursor-progress aria-invalid:outline-2 aria-invalid:outline-offset-2 aria-invalid:outline-destructive [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow-brand hover:brightness-95 active:translate-y-0.5 active:shadow-none",
        destructive:
          "bg-destructive text-destructive-foreground hover:brightness-110 active:translate-y-0.5",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground active:bg-secondary",
        secondary: "bg-secondary text-secondary-foreground hover:bg-accent active:bg-border",
        ghost: "hover:bg-accent hover:text-accent-foreground active:bg-secondary",
        link: "rounded-xs text-brand-strong underline underline-offset-4 hover:decoration-2",
      },
      size: {
        default: "h-10 px-5",
        sm: "h-9 px-4 text-body-md",
        lg: "h-12 px-7 text-base",
        icon: "size-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  loading?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, variant, size, asChild = false, loading = false, disabled, children, ...props },
    ref,
  ) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        disabled={asChild ? undefined : disabled || loading}
        aria-disabled={asChild && (disabled || loading) ? true : undefined}
        aria-busy={loading || undefined}
        {...props}
      >
        {loading && !asChild ? (
          <>
            <Loader2 className="animate-spin" aria-hidden="true" />
            {children}
          </>
        ) : (
          children
        )}
      </Comp>
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
