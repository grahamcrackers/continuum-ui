import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const SeatIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M5 18H4a2 2 0 0 0-2 2v13a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V19a1 1 0 0 0-1-1ZM32 18h-1a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V20a2 2 0 0 0-2-2Z" />
                <rect height="8" rx="1" ry="1" width="20" x="8" y="22" />
                <path d="M22 4h-8a6 6 0 0 0-6 6v9a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-9a6 6 0 0 0-6-6Z" />
            </svg>
        );
    },
);
