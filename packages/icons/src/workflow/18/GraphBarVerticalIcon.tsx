import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const GraphBarVerticalIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M26 3v27h6V3a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1ZM18 13v17h6V13a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1ZM10 21v9h6v-9a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1ZM2 25v5h6v-5a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1Z" />
                <rect height="2" rx=".5" ry=".5" width="34" y="32" />
            </svg>
        );
    },
);
