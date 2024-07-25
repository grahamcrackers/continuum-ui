import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const LocationIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M24 1.859a16.1 16.1 0 0 0-16.1 16.1C7.9 26.851 24 47.141 24 47.141s16.1-20.29 16.1-29.182A16.1 16.1 0 0 0 24 1.859ZM24 24.2a6.239 6.239 0 1 1 6.239-6.239A6.239 6.239 0 0 1 24 24.2Z" />
            </svg>
        );
    },
);
