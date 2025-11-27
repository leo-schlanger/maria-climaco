import * as React from "react"
import { cn } from "@/lib/utils"

const Textarea = React.forwardRef(({ className, ...props }, ref) => {
    return (
        <textarea
            className={cn(
                "flex min-h-[120px] w-full rounded-lg border border-rosa-light bg-white px-4 py-3 text-base text-ameixa placeholder:text-ameixa/40 focus:outline-none focus:ring-2 focus:ring-dourado focus:border-transparent disabled:cursor-not-allowed disabled:opacity-50 resize-y transition-all duration-200",
                className
            )}
            ref={ref}
            {...props}
        />
    )
})
Textarea.displayName = "Textarea"

export { Textarea }
