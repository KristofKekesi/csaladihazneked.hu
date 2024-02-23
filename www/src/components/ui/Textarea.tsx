import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

//    TURTLE - TEKI
//    (°-°) _______
//      \ / - - - \_
//       \_  ___  ___>
//         \__) \__)

const textareaVariants = cva(cn(
  "flex min-h-[80px] w-full rounded-md border border-input bg-background",
  "px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground",
  "focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50",
  "bg-white/40 focus:bg-white/20 hover:bg-white/30",
  "bg-white/40 focus:bg-white/20 hover:bg-white/30 border-2 border-dashed", 
  "focus:border-white border-transparent transition-colorsresize-none h-96",
  "file:border-0 file:bg-transparent file:text-sm file:font-medium select-auto"),
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

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    VariantProps<typeof textareaVariants> {
  asChild?: boolean
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, variant, ...props }, ref) => {
    return (
      <textarea
        className={ cn(textareaVariants({ variant }), className )}
        ref={ref}
        {...props}
      />
    );
  }
);
Textarea.displayName = "Textarea";

export { Textarea };
