import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const BugIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M34.925 9.656A13.066 13.066 0 0 0 24 4a13.067 13.067 0 0 0-10.926 5.656A15.926 15.926 0 0 0 24 14a15.923 15.923 0 0 0 10.925-4.344ZM6.954 8.523 3.4 10.3a24.161 24.161 0 0 0 6.1 6.82A36.8 36.8 0 0 0 8.156 24H0v4h8.06a18.125 18.125 0 0 0 3.34 8.485 20.084 20.084 0 0 0-6 8.213l3.6 1.8a16.073 16.073 0 0 1 5.032-6.934A15.43 15.43 0 0 0 22 43.811V18A19.979 19.979 0 0 1 6.954 8.523ZM48 28v-4h-8.157a36.8 36.8 0 0 0-1.348-6.88A24.149 24.149 0 0 0 44.6 10.3l-3.555-1.777A19.979 19.979 0 0 1 26 18v25.811a15.427 15.427 0 0 0 7.972-4.247A16.065 16.065 0 0 1 39 46.5l3.6-1.8a20.084 20.084 0 0 0-6-8.213A18.134 18.134 0 0 0 39.939 28Z" />
            </svg>
        );
    },
);
