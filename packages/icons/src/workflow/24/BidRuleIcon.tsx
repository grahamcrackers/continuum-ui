import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const BidRuleIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="m24 16 8-8 8 8-8 8zM33.32 27.73l10.41-10.41a1.052 1.052 0 0 1 1.487 0l1.485 1.485a1.052 1.052 0 0 1 0 1.487L36.293 30.703a1.051 1.051 0 0 1-1.485.002l-1.485-1.485a1.052 1.052 0 0 1-.003-1.49ZM17.337 11.747 27.748 1.338a1.052 1.052 0 0 1 1.488 0l1.485 1.485a1.051 1.051 0 0 1 0 1.487L20.309 14.72a1.052 1.052 0 0 1-1.488 0l-1.484-1.486a1.052 1.052 0 0 1 0-1.487ZM5.414 45.414l-2.828-2.828a2 2 0 0 1 0-2.828L24 20l4 4L8.242 45.414a2 2 0 0 1-2.828 0ZM46 42v-2a2 2 0 0 0-2-2H32a2 2 0 0 0-2 2v2h-1a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1Z" />
            </svg>
        );
    },
);
