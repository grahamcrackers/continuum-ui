import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const GraphBubbleIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <circle cx="13" cy="13" r="7" />
                <circle cx="10" cy="31.375" r="4" />
                <path d="M33.844 20.369a5.853 5.853 0 1 0-6.245.754 11.9 11.9 0 1 0 6.245-.754Z" />
            </svg>
        );
    },
);
