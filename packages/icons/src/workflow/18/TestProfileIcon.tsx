import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const TestProfileIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M35.338 32.3 23.864 20.824a12.012 12.012 0 1 0-3.04 3.04L32.3 35.338a2.155 2.155 0 0 0 3.04-3.04ZM4 14a10 10 0 1 1 17.8 6.192c-.5-1.344-1.816-2.977-4.956-3.3a.777.777 0 0 1-.673-.78V14.99a.78.78 0 0 1 .2-.5 5.949 5.949 0 0 0 1.353-3.71c0-2.808-1.489-4.377-3.74-4.377S10.2 8.031 10.2 10.777a6.008 6.008 0 0 0 1.417 3.71.779.779 0 0 1 .2.5v1.121a.774.774 0 0 1-.675.781c-3.2.278-4.481 1.9-4.962 3.265A9.91 9.91 0 0 1 4 14Z" />
            </svg>
        );
    },
);
