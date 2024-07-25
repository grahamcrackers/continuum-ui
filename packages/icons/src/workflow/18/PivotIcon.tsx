import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const PivotIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M30 26V12a6 6 0 0 0-6-6H10V1.207a.5.5 0 0 0-.854-.353L0 10l9.146 9.146a.5.5 0 0 0 .854-.353V14h12v12h-4.793a.5.5 0 0 0-.354.854L26 36l9.146-9.146a.5.5 0 0 0-.353-.854Z" />
            </svg>
        );
    },
);
