import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const PasteListIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M30 6a6 6 0 0 0-12 0h-4v5a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V6Zm-6 3a3 3 0 1 1 3-3 3 3 0 0 1-3 3Z" />
                <path d="M40 6h-2v8a2 2 0 0 1-2 2H12a2 2 0 0 1-2-2V6H8a2 2 0 0 0-2 2v34a2 2 0 0 0 2 2h32a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2ZM16 33a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1Zm0-8a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1Zm20 8a1 1 0 0 1-1 1H21a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1Zm0-8a1 1 0 0 1-1 1H21a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1Z" />
            </svg>
        );
    },
);
