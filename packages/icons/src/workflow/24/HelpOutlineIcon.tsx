import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const HelpOutlineIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M24 7.9A16.1 16.1 0 1 1 7.9 24 16.118 16.118 0 0 1 24 7.9Zm0-3.8A19.9 19.9 0 1 0 43.9 24 19.9 19.9 0 0 0 24 4.1Z" />
                <path d="M29.724 18.665c0 3.521-4.544 5.537-4.544 7.361a3.367 3.367 0 0 0 .575 1.7.166.166 0 0 1-.159.256h-2.817a.414.414 0 0 1-.384-.16 3.449 3.449 0 0 1-.832-2.176c0-2.561 4.192-4.128 4.192-6.689 0-1.248-1.024-2.336-2.976-2.336a9.248 9.248 0 0 0-3.872.8c-.128.064-.224 0-.224-.128v-2.532c0-.128 0-.256.128-.32a10.942 10.942 0 0 1 4.768-.992c3.745 0 6.145 2.144 6.145 5.216Zm-7.969 14.082a2.241 2.241 0 0 1 4.481 0A2.084 2.084 0 0 1 24 34.987a2.116 2.116 0 0 1-2.245-2.24Z" />
            </svg>
        );
    },
);
