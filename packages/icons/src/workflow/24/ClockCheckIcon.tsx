import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const ClockCheckIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M20 22.086V11a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v12.586a1 1 0 0 1-.293.707l-6.3 6.3a1 1 0 0 1-1.414 0l-1.336-1.336a1 1 0 0 1 0-1.414l5.054-5.054a1 1 0 0 0 .289-.703Z" />
                <path d="M20.661 40.132A16.194 16.194 0 1 1 37.73 20.2a15.784 15.784 0 0 1 4.051 1A19.99 19.99 0 1 0 22 44c.09 0 .177-.012.267-.013a15.791 15.791 0 0 1-1.606-3.855Z" />
                <path d="M36 24.1A11.9 11.9 0 1 0 47.9 36 11.9 11.9 0 0 0 36 24.1Zm-2.229 19.8-6.133-6.133a.5.5 0 0 1 0-.707L29.4 35.3a.5.5 0 0 1 .707 0L34 39.188l8.939-8.94a.5.5 0 0 1 .707 0l1.887 1.887a.5.5 0 0 1 0 .707L34.478 43.9a.5.5 0 0 1-.707 0Z" />
            </svg>
        );
    },
);
