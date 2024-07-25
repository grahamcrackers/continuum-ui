import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const SeparatorIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M29 4H7a1 1 0 0 0-1 1v9h24V5a1 1 0 0 0-1-1ZM6 31a1 1 0 0 0 1 1h22a1 1 0 0 0 1-1v-9H6Z" />
                <rect height="4" rx="1" ry="1" width="32" x="2" y="16" />
            </svg>
        );
    },
);
