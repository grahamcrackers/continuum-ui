import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const BranchCircleIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <circle cx="32" cy="32" r="3.307" />
                <circle cx="32" cy="16" r="3.307" />
                <path d="M24 4.1A19.9 19.9 0 1 0 43.9 24 19.9 19.9 0 0 0 24 4.1Zm8 34.1a6.122 6.122 0 0 1-6.093-7.266L18.863 27.8a6.2 6.2 0 1 1 0-7.606l7.044-3.131a6.252 6.252 0 1 1 1.23 2.737l-7.044 3.13a5.33 5.33 0 0 1 0 2.132l7.043 3.138A6.189 6.189 0 1 1 32 38.2Z" />
            </svg>
        );
    },
);
