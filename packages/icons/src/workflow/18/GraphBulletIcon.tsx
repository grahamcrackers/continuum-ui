import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const GraphBulletIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M2 8.5v3a.5.5 0 0 0 .5.5H8V8H2.5a.5.5 0 0 0-.5.5ZM29.5 8H16v4h13.5a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5ZM14 16H2.378a.378.378 0 0 0-.378.378v3.244a.378.378 0 0 0 .378.378H14ZM2 24.5v3a.5.5 0 0 0 .5.5H20v-4H2.5a.5.5 0 0 0-.5.5ZM33.5 24H28v4h5.5a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5Z" />
                <rect height="8" rx="1" ry="1" width="4" x="10" y="6" />
                <rect height="8" rx="1" ry="1" width="4" x="16" y="14" />
                <rect height="8" rx="1" ry="1" width="4" x="22" y="22" />
            </svg>
        );
    },
);
