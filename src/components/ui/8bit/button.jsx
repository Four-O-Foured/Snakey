import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
    "inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 font-pixel uppercase tracking-widest hover:translate-y-1 active:translate-y-2 active:shadow-none transition-all duration-75",
    {
        variants: {
            variant: {
                default:
                    "bg-primary text-primary-foreground hover:bg-primary/90 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] border-2 border-primary-foreground",
                destructive:
                    "bg-destructive text-destructive-foreground hover:bg-destructive/90 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] border-2 border-destructive-foreground",
                outline:
                    "border-2 border-input bg-background hover:bg-accent hover:text-accent-foreground shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]",
                secondary:
                    "bg-secondary text-secondary-foreground hover:bg-secondary/80 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] border-2 border-secondary-foreground",
                ghost: "hover:bg-accent hover:text-accent-foreground",
                link: "text-primary underline-offset-4 hover:underline",
                game: "bg-(--Tertiary_Color) text-(--Secondary_Color) border-2 border-(--Secondary_Color) shadow-[4px_4px_0px_0px_var(--Accent_Color)] hover:bg-(--Accent_Color) hover:text-white hover:border-white hover:shadow-[4px_4px_0px_0px_var(--Tertiary_Color)]",
                retro: "bg-(--Accent_Color) text-(--Primary_Color) border-4 border-(--Secondary_Color) rounded-none shadow-[6px_6px_0px_0px_var(--Secondary_Color)] hover:translate-y-1 hover:shadow-[3px_3px_0px_0px_var(--Secondary_Color)] active:translate-y-2 active:shadow-none transition-all",
            },
            size: {
                default: "h-10 px-4 py-2",
                sm: "h-9 rounded-md px-3",
                lg: "h-11 rounded-md px-8",
                icon: "h-10 w-10",
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
        <Comp
            className={cn(buttonVariants({ variant, size, className }))}
            ref={ref}
            {...props}
        />
    )
})
Button.displayName = "Button"

export { Button, buttonVariants }
