import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const MarginLeftIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <g>
                    <path d="M32 32H18V4h14Zm2 1V3a1 1 0 0 0-1-1H17a1 1 0 0 0-1 1v30a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1Z" />
                    <rect height="10" rx="1" transform="rotate(90 7 18)" width="32" x="-9" y="13" />
                </g>
            </svg>
        );
    },
);
