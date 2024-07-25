import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const WebPagesIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M6 9v24a1 1 0 0 0 1 1h26a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1Zm26 23H8V14h24Z" />
                <path d="M4 6h26V3a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v24a1 1 0 0 0 1 1h1Z" />
                <path d="M6 9v24a1 1 0 0 0 1 1h26a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1Zm26 23H8V14h24Z" />
                <path d="M4 6h26V3a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v24a1 1 0 0 0 1 1h1Z" />
            </svg>
        );
    },
);
