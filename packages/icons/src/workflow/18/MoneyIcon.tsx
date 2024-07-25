import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const MoneyIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <circle cx="22" cy="14" r="4" />
                <path d="M8 21V7a1 1 0 0 1 1-1h26a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1Zm26-9.343A6.016 6.016 0 0 1 30.343 8H13.657A6.015 6.015 0 0 1 10 11.657v4.686A6.016 6.016 0 0 1 13.657 20h16.686A6.015 6.015 0 0 1 34 16.343Z" />
                <path d="M33 26H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h1v16h28v1a1 1 0 0 1-1 1Z" />
                <path d="M29 30H1a1 1 0 0 1-1-1V13a1 1 0 0 1 1-1h1v16h28v1a1 1 0 0 1-1 1Z" />
            </svg>
        );
    },
);
