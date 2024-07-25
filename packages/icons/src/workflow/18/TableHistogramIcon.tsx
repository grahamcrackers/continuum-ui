import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const TableHistogramIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M33 2H3a1 1 0 0 0-1 1v30a1 1 0 0 0 1 1h30a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1ZM10 32H4v-4h6Zm0-6H4v-4h6Zm0-6H4v-4h6Zm12 12H12v-4h10Zm10-6H12v-4h20Zm-6-6H12v-4h14Zm6-6H4V4h28Z" />
            </svg>
        );
    },
);
