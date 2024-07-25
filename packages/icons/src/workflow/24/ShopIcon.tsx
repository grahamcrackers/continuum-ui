import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const ShopIcon = React.forwardRef<SVGSVGElement, IconProps>(
    ({ className, size, focusable = false, hidden = true, color = "currentColor", ...props }, forwardedRef) => {
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 48 48"
                className={iconVariants({ size, className })}
                focusable={focusable}
                aria-hidden={hidden}
                {...props}
                ref={forwardedRef}
            >
                <path d="M47.709 16.98 44.207 4.725A1 1 0 0 0 43.246 4H4.754a1 1 0 0 0-.961.725L.29 16.98a.8.8 0 0 0 .77 1.02h45.878a.8.8 0 0 0 .77-1.02ZM7 16H3L6 6h4Zm9.5 0h-4L14 6h4Zm9.5 0h-4V6h4Zm5.5 0L30 6h4l1.5 10Zm9.5 0L38 6h4l3 10Zm3 4v22a2 2 0 0 1-2 2H18V20h4v12h18V20ZM8 44H6a2 2 0 0 1-2-2V20h4Zm6-15a2 2 0 1 1-2 2 2 2 0 0 1 2-2Z" />
            </svg>
        );
    },
);
