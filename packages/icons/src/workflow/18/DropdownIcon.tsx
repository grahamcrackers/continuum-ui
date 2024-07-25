import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const DropdownIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M30.5 2h-27A1.5 1.5 0 0 0 2 3.5v4.963a1.5 1.5 0 0 0 1.5 1.5h27a1.5 1.5 0 0 0 1.5-1.5V3.5A1.5 1.5 0 0 0 30.5 2ZM25 8.764l-3.72-4.038a.432.432 0 0 1 .332-.708H28.4a.432.432 0 0 1 .332.708ZM30.5 12h-27A1.5 1.5 0 0 0 2 13.5v19A1.5 1.5 0 0 0 3.5 34h27a1.5 1.5 0 0 0 1.5-1.5v-19a1.5 1.5 0 0 0-1.5-1.5ZM6 15.75a.75.75 0 0 1 .75-.75h20.5a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-.75.75H6.75a.75.75 0 0 1-.75-.75Zm22 13.5a.75.75 0 0 1-.75.75H6.75a.75.75 0 0 1-.75-.75v-1.5a.75.75 0 0 1 .75-.75h20.5a.75.75 0 0 1 .75.75Zm-2-6a.75.75 0 0 1-.75.75H6.75a.75.75 0 0 1-.75-.75v-1.5a.75.75 0 0 1 .75-.75h18.5a.75.75 0 0 1 .75.75Z" />
            </svg>
        );
    },
);
