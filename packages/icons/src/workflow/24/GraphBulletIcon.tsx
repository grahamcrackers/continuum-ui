import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const GraphBulletIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M20 20H5a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h15ZM4 9v4a1 1 0 0 0 1 1h5V8H5a1 1 0 0 0-1 1Zm33-1H20v6h17a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1Z" />
                <rect height="10" rx="2.449" ry="2.449" width="6" x="12" y="6" />
                <rect height="10" rx="2.449" ry="2.449" width="6" x="30" y="30" />
                <rect height="10" rx="2.449" ry="2.449" width="6" x="22" y="18" />
                <path d="M43 32h-5v6h5a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1ZM4 33v4a1 1 0 0 0 1 1h23v-6H5a1 1 0 0 0-1 1Z" />
            </svg>
        );
    },
);
