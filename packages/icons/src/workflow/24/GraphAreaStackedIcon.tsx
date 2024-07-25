import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const GraphAreaStackedIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M39.743 22.564 44 31.078v12.5H4v-20l12.5 15 4.168-6.252a1 1 0 0 1 1.664 0l4.168 6.252L38.035 22.43a1 1 0 0 1 1.708.134Z" />
                <path d="M16.144 32.324 19 28.033a3 3 0 0 1 4.992 0l2.617 3.926 10.1-14.136a3 3 0 0 1 5.124.4L44 22.555v-11.9l-4.141-6.21a1 1 0 0 0-1.68.025L26.5 23.156 22.332 16.9a1 1 0 0 0-1.664 0L16.5 23.156 4 8v9.751Z" />
            </svg>
        );
    },
);
