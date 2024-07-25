import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const ChannelIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M43.167 20.167a3.817 3.817 0 0 0-3.3 1.916h-6.061a9.946 9.946 0 0 0-3.56-5.835l3.494-6.639a3.838 3.838 0 1 0-3.394-1.781l-3.492 6.636A9.874 9.874 0 0 0 24 14a9.881 9.881 0 0 0-2.855.464l-3.492-6.636a3.831 3.831 0 1 0-3.394 1.781l3.5 6.639a9.947 9.947 0 0 0-3.561 5.835H8.134a3.833 3.833 0 1 0 0 3.834h6.059a9.947 9.947 0 0 0 3.561 5.835l-3.5 6.639a3.841 3.841 0 1 0 3.394 1.781l3.492-6.636A9.881 9.881 0 0 0 24 34a9.874 9.874 0 0 0 2.854-.464l3.492 6.636a3.832 3.832 0 1 0 3.394-1.781l-3.494-6.639a9.946 9.946 0 0 0 3.56-5.835h6.059a3.827 3.827 0 1 0 3.3-5.75ZM24 30.1a6.1 6.1 0 1 1 6.1-6.1 6.1 6.1 0 0 1-6.1 6.1Z" />
            </svg>
        );
    },
);
