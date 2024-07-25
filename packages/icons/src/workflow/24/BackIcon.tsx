import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const BackIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M14 14V7.207a.5.5 0 0 0-.854-.354L.6 19l12.546 12.146a.5.5 0 0 0 .854-.353V24h20v17a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V22a8 8 0 0 0-8-8Z" />
            </svg>
        );
    },
);
