import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const DashboardIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M9.321 36.978a18.245 18.245 0 0 1-3.653-10.717 18.539 18.539 0 0 1 17.8-18.587 18.33 18.33 0 0 1 15.212 29.3 1 1 0 0 0 .143 1.373l1.277 1.07a1.008 1.008 0 0 0 1.442-.147 22 22 0 1 0-35.084 0 1 1 0 0 0 1.438.147l1.281-1.068a1 1 0 0 0 .144-1.371Z" />
                <path d="M27.9 31.127a4 4 0 1 1-4.773-3.027c1.028-.229 7.608-8.53 8.451-8.037C32.5 20.6 27.651 30 27.9 31.127Z" />
                <circle cx="10" cy="26" r="2.2" />
                <circle cx="14" cy="16" r="2.2" />
                <circle cx="34" cy="16" r="2" />
                <circle cx="24" cy="12" r="2" />
                <circle cx="38" cy="26" r="2" />
            </svg>
        );
    },
);
