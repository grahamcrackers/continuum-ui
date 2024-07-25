import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const ButtonIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M36.06 15.9a8.1 8.1 0 0 1 0 16.2H11.94a8.1 8.1 0 0 1 0-16.2ZM36 12H12a12 12 0 1 0 0 24h24a12 12 0 0 0 0-24Z" />
                <path d="M35.933 18.1H12.066a5.9 5.9 0 1 0 0 11.8h23.867a5.9 5.9 0 1 0 0-11.8Z" />
            </svg>
        );
    },
);
