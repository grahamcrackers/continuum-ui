import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const ContrastIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M24 11.7v24.6a12.3 12.3 0 0 0 0-24.6Z" />
            </svg>
        );
    },
);
