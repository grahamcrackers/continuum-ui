import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const GraphBarHorizontalIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M33 10H6V4h27a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1ZM23 18H6v-6h17a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1ZM15 26H6v-6h9a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1ZM11 34H6v-6h5a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1Z" />
                <rect height="34" rx=".5" ry=".5" width="2" x="2" y="2" />
            </svg>
        );
    },
);
