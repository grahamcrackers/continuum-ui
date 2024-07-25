import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const ForwardIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M26 10V5.207a.5.5 0 0 1 .854-.354L36 14l-9.146 9.146a.5.5 0 0 1-.854-.353V18H10v13a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V16a6 6 0 0 1 6-6Z" />
            </svg>
        );
    },
);
