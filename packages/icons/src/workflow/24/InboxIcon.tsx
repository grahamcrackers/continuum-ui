import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const InboxIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <rect height="4" rx="1" ry="1" width="32" x="8" y="20" />
                <rect height="4" rx="1" ry="1" width="32" x="8" y="12" />
                <rect height="4" rx="1" ry="1" width="32" x="8" y="4" />
                <path d="M44 13v15h-6a2 2 0 0 0-2 2v4a2 2 0 0 1-2 2H14a2 2 0 0 1-2-2v-4a2 2 0 0 0-2-2H4V13a1 1 0 0 0-1-1H1a1 1 0 0 0-1 1v29a2 2 0 0 0 2 2h44a2 2 0 0 0 2-2V13a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1Z" />
            </svg>
        );
    },
);
