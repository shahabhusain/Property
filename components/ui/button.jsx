import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  " border-none",
  {
    variants: {
      variant: {
        default:
          " z-[1000]",
        destructive:
          "  z-[1000]",
        outline:
          "",
        secondary:
          "  z-[1000]",
        ghost: "",
        link: "",
      },
      size: {
        default: "h-9   z-[1000] border-none",
        sm: "h-8 rounded-md border-none  px-3 text-xs",
        lg: "h-10 rounded-md border-none px-8",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

const Button = React.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button"
  return (
    (<Comp
      className={cn(buttonVariants({ variant, size, className }))}
      ref={ref}
      {...props} />)
  );
})
Button.displayName = "Button"

export { Button, buttonVariants }
