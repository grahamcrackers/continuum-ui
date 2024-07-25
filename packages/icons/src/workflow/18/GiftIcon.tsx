import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const GiftIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M2 33a1 1 0 0 0 1 1h13V20H2ZM0 13v4a1 1 0 0 0 1 1h15v-6H1a1 1 0 0 0-1 1Zm20 21h13a1 1 0 0 0 1-1V20H20Zm15-22H20v6h15a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1ZM26 2c-1.81 0-5.638 1.39-8 5.172C15.638 3.39 11.81 2 10 2a4 4 0 0 0 0 8h16a4 4 0 0 0 0-8ZM10 8a2 2 0 0 1 0-4 8.734 8.734 0 0 1 6.2 4Zm16 0h-6.2A8.734 8.734 0 0 1 26 4a2 2 0 0 1 0 4Z" />
            </svg>
        );
    },
);
