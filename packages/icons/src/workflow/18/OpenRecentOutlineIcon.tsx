import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const OpenRecentOutlineIcon = React.forwardRef<SVGSVGElement, IconProps>(
    ({ className, size, focusable = false, hidden = true, color = "currentColor", ...props }, forwardedRef) => {
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                height="36"
                viewBox="0 0 36 36"
                width="36"
                className={iconVariants({ size, className })}
                focusable={focusable}
                aria-hidden={hidden}
                {...props}
                ref={forwardedRef}
            >
                <path d="M16.051 28H4l4.689-14h24.536l-1.093 3.279a10.983 10.983 0 0 1 1.729 1.138l1.7-5.1A1 1 0 0 0 34.613 12H32V9a1 1 0 0 0-1-1l-12.332.007-3.3-3.4A2 2 0 0 0 13.929 4H4a2 2 0 0 0-2 2v23a1 1 0 0 0 1 1h13.427a10.837 10.837 0 0 1-.376-2Z" />
                <path d="M27 18.1a8.9 8.9 0 1 0 8.9 8.9 8.9 8.9 0 0 0-8.9-8.9Zm0 16a7.1 7.1 0 0 1-1-14.121V27a1 1 0 0 0 .293.707l3.023 3.023a.5.5 0 0 0 .707 0l.707-.708a.5.5 0 0 0 0-.707L28 26.586v-6.608A7.1 7.1 0 0 1 27 34.1Z" />
            </svg>
        );
    },
);
