import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const DataIcon = React.forwardRef<SVGSVGElement, IconProps>(
    ({ className, size, focusable = false, hidden = true, color = "currentColor", ...props }, forwardedRef) => {
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                height="48"
                viewBox="0 0 48 48"
                width="48"
                className={iconVariants({ size, className })}
                focusable={focusable}
                aria-hidden={hidden}
                {...props}
                ref={forwardedRef}
            >
                <ellipse cx="24" cy="10.25" rx="20" ry="6.25" />
                <path d="M24 32.158c-6.17 0-17.765-1.461-20-5.006v10.6C4 41.2 12.954 44 24 44s20-2.8 20-6.25v-10.6c-3.059 3.871-13.83 5.008-20 5.008Z" />
                <path d="M24 20.5c-6.17 0-17.765-1.461-20-5v6.471c0 3.451 8.954 6.25 20 6.25s20-2.8 20-6.25V15.5c-3.059 3.865-13.83 5-20 5Z" />
            </svg>
        );
    },
);
