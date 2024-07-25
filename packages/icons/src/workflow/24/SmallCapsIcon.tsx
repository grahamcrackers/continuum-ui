import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const SmallCapsIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M29 20a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-3h4v14h-3a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1h-3V24h4v2.973a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V21a1 1 0 0 0-1-1Z" />
                <path d="M2 6h30a2 2 0 0 1 2 2v7a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-5H20v28h3a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H11a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h3V10H4v5a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V8a2 2 0 0 1 2-2Z" />
            </svg>
        );
    },
);
