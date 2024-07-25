import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const AddIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M37 20H26V9a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v11H9a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h11v11a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1V26h11a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1Z" />
            </svg>
        );
    },
);
