import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const DocumentFragmentGroupIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M35 8H5a1 1 0 0 0-1 1v22a1 1 0 0 0 1 1h30a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1ZM8 12h14v8.875a8.532 8.532 0 0 0-3.478-1.125c-1.653 0-2.4 2.2-4.052 2.2s-1.7-3.765-3.351-3.765C9.617 18.181 8 22 8 22Zm24 16H8v-2h24Zm0-8h-6v-2h6Zm0-6h-6v-2h6Z" />
                <path d="M2 7a1 1 0 0 1 1-1h29V5a1 1 0 0 0-1-1H1a1 1 0 0 0-1 1v22a1 1 0 0 0 1 1h1Z" />
                <circle cx="18" cy="16" r="2" />
            </svg>
        );
    },
);
