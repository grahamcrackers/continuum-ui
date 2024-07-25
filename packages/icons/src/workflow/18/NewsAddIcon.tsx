import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const NewsAddIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M20 12h10v2H20z" />
                <path d="M14.75 28H6V8h26v7.769a12.265 12.265 0 0 1 2 1.124V7a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v20a1 1 0 0 1-2 0V10.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5V27a3 3 0 0 0 3 3h12.084a12.259 12.259 0 0 1-.334-2Z" />
                <path d="M21.52 16H20v.893A12.225 12.225 0 0 1 21.52 16ZM18 18.635V12H8v10h7.769A12.3 12.3 0 0 1 18 18.635ZM15.084 24H8v2h6.75a12.259 12.259 0 0 1 .334-2ZM27 18.1a8.9 8.9 0 1 0 8.9 8.9 8.9 8.9 0 0 0-8.9-8.9Zm5 9.4a.5.5 0 0 1-.5.5H28v3.5a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5V28h-3.5a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5H26v-3.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5V26h3.5a.5.5 0 0 1 .5.5Z" />
            </svg>
        );
    },
);
