import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const ViewColumnIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M10 34H3a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h7ZM14 2h8v32h-8zM33 34h-7V2h7a1 1 0 0 1 1 1v30a1 1 0 0 1-1 1Z" />
            </svg>
        );
    },
);
