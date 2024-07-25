import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const PolygonIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M34.61 17.53 26.942 4.565A1.077 1.077 0 0 0 26 4H10.046a1.077 1.077 0 0 0-.946.561l-7.708 12.9a1.079 1.079 0 0 0 0 1.03L9.1 31.438a1.079 1.079 0 0 0 .946.562H26a1.078 1.078 0 0 0 .947-.563l7.666-12.881a1.079 1.079 0 0 0-.003-1.026ZM25.447 30H10.6L3.388 17.98 10.593 6h14.851l7.169 12.04Z" />
            </svg>
        );
    },
);
