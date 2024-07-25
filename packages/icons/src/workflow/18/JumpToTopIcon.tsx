import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const JumpToTopIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M22 22v11a1 1 0 0 1-1 1h-8a1 1 0 0 1-1-1V22H5.007a.5.5 0 0 1-.354-.854L17 9l12.346 12.146a.5.5 0 0 1-.354.854Z" />
                <rect height="4" rx=".5" ry=".5" width="34" y="2" />
            </svg>
        );
    },
);
