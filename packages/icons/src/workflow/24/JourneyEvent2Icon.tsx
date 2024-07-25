import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const JourneyEvent2Icon = React.forwardRef<SVGSVGElement, IconProps>(
    ({ className, size, focusable = false, hidden = true, color = "currentColor", ...props }, forwardedRef) => {
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                height="48"
                viewBox="0 0 48 48"
                width="48"
                className={iconVariants({ size, className })}
                focusable={focusable}
                aria-hidden={hidden}
                {...props}
                ref={forwardedRef}
            >
                <path d="M36 24.1A11.9 11.9 0 1 0 47.9 36 11.9 11.9 0 0 0 36 24.1Zm0 20.8a8.887 8.887 0 0 1-1.5-17.649v9.37l3.688 3.688a.5.5 0 0 0 .708 0L40.31 38.9a.5.5 0 0 0 0-.707l-2.81-2.814v-8.128A8.887 8.887 0 0 1 36 44.9Z" />
                <path d="M36 24.1A11.9 11.9 0 1 0 47.9 36 11.9 11.9 0 0 0 36 24.1Zm0 20.8a8.887 8.887 0 0 1-1.5-17.649v9.37l3.688 3.688a.5.5 0 0 0 .708 0L40.31 38.9a.5.5 0 0 0 0-.707l-2.81-2.814v-8.128A8.887 8.887 0 0 1 36 44.9Z" />
                <path d="M20 34a7.991 7.991 0 0 0 .055.908A15.916 15.916 0 0 1 24 25.441V14a4 4 0 0 1 4-4h6.349a6 6 0 1 0 0-4H28a8 8 0 0 0-8 8v8h-6.349a6 6 0 1 0 0 4H20ZM40 5.6A2.4 2.4 0 1 1 37.6 8 2.4 2.4 0 0 1 40 5.6ZM8 26.4a2.4 2.4 0 1 1 2.4-2.4A2.4 2.4 0 0 1 8 26.4Z" />
            </svg>
        );
    },
);
