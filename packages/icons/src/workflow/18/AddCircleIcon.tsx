import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const AddCircleIcon = React.forwardRef<SVGSVGElement, IconProps>(
    ({ className, size, focusable = false, hidden = true, color = "currentColor", ...props }, forwardedRef) => {
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="36"
                viewBox="0 0 36 36"
                className={iconVariants({ size, className })}
                focusable={focusable}
                aria-hidden={hidden}
                {...props}
                ref={forwardedRef}
            >
                <path d="M18 2a16 16 0 1 0 16 16A16 16 0 0 0 18 2Zm10 17a1 1 0 0 1-1 1h-7v7a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-7H9a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h7V9a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7h7a1 1 0 0 1 1 1Z" />
            </svg>
        );
    },
);
