import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const AdDisplayIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M28 10h10v18H28z" />
                <path d="M44 4H4a2 2 0 0 0-2 2v26a2 2 0 0 0 2 2h14v4a2.006 2.006 0 0 1-2 2h-3a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h22a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1h-3a2.006 2.006 0 0 1-2-2v-4h14a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm-2 26H6V8h36Z" />
            </svg>
        );
    },
);
