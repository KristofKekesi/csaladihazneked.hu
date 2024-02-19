import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const inputVariants = cva(cn(
  "flex h-10 w-full rounded-md border border-input px-3 py-2",
  "text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm",
  "file:font-medium placeholder:text-muted-foreground focus-visible:outline-none",
  "disabled:cursor-not-allowed disabled:opacity-50 w-full select-auto",
  "border-2 border-dashed border-transparent transition-colors focus:border-white",
  "bg-white/40 focus:bg-white/20 hover:bg-white/30"),
  {
    variants: {
      variant: {
        default: "",
        destructive: "bg-red-900/20 focus:bg-white/20 hover:bg-white/30 border-red-700"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {
  asChild?: boolean
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, variant, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={ cn(inputVariants({ variant }), className) }
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };
