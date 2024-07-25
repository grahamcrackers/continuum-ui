import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const SelectBoxAllIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M29.2 8H12.8A4.8 4.8 0 0 0 8 12.8v16.4a4.8 4.8 0 0 0 4.8 4.8h16.4a4.8 4.8 0 0 0 4.8-4.8V12.8A4.8 4.8 0 0 0 29.2 8Zm1.223 9.049L18.988 28.573a.8.8 0 0 1-1.131 0l-6.28-6.278a.8.8 0 0 1 0-1.131l2.491-2.491a.8.8 0 0 1 1.131 0l3.224 3.227 8.378-8.47a.8.8 0 0 1 1.131 0l2.491 2.491a.8.8 0 0 1 0 1.128Z" />
                <path d="M26 2H6.8A4.8 4.8 0 0 0 2 6.8V26a4 4 0 0 0 4 4V6h24a4 4 0 0 0-4-4Z" />
            </svg>
        );
    },
);
