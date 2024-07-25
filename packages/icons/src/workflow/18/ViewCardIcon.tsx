import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const ViewCardIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M2 33a1 1 0 0 0 1 1h7V18H2ZM3 2a1 1 0 0 0-1 1v11h8V2ZM26 34h7a1 1 0 0 0 1-1v-5h-8ZM33 2h-7v6h8V3a1 1 0 0 0-1-1ZM14 22h8v12h-8zM14 2h8v16h-8zM26 12h8v12h-8z" />
            </svg>
        );
    },
);
