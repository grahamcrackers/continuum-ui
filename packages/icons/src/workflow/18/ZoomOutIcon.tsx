import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const ZoomOutIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <rect height="4" rx=".5" ry=".5" width="12" x="10" y="14" />
                <path d="M35.173 32.215 27.256 24.3a14.031 14.031 0 1 0-2.956 2.957l7.916 7.916a2.1 2.1 0 0 0 2.958-2.958ZM6 16a10 10 0 1 1 10 10A10 10 0 0 1 6 16Z" />
            </svg>
        );
    },
);
