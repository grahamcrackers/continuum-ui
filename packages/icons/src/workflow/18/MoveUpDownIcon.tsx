import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const MoveUpDownIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M23.517 6.311A1 1 0 0 1 22.8 8H20v6h-6V8h-2.778a1.006 1.006 0 0 1-.722-1.707L17 0ZM23.5 29.707A1.006 1.006 0 0 0 22.778 28H20v-6h-6v6h-2.8a1 1 0 0 0-.715 1.689L17 36Z" />
                <rect height="4" rx="1" ry="1" width="30" x="2" y="16" />
            </svg>
        );
    },
);
