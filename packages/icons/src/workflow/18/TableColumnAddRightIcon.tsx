import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const TableColumnAddRightIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M18.1 27a8.9 8.9 0 1 0 8.9-8.9 8.9 8.9 0 0 0-8.9 8.9Zm3.9-.5a.5.5 0 0 1 .5-.5H26v-3.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5V26h3.5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H28v3.5a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5V28h-3.5a.5.5 0 0 1-.5-.5Z" />
                <path d="M15.769 32H14v-8h1.084a12.154 12.154 0 0 1 .685-2H14v-8h8v1.769a12.252 12.252 0 0 1 12 1.124V3a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v30a1 1 0 0 0 1 1h13.893a12.236 12.236 0 0 1-1.124-2ZM14 4h8v8h-8Zm-2 28H4v-8h8Zm0-10H4v-8h8Zm0-10H4V4h8Z" />
            </svg>
        );
    },
);
