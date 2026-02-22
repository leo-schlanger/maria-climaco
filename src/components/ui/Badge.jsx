import * as React from "react"
import { cn } from "@/lib/utils"

function Badge({ className, variant = "default", ...props }) {
    const variants = {
        default: "border-transparent bg-ameixa text-white hover:bg-ameixa/80",
        secondary: "border-transparent bg-rosa text-ameixa hover:bg-rosa/80",
        outline: "text-ameixa border-ameixa/20",
        dourado: "border-transparent bg-dourado text-white hover:bg-dourado/80",
        lavanda: "border-transparent bg-lavanda text-white hover:bg-lavanda/80",
    }

    return (
        <div
            className={cn(
                "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
                variants[variant],
                className
            )}
            {...props}
        />
    )
}

export { Badge }
