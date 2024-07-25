import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const FlagIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M36.917 9.289a24.815 24.815 0 0 0-5.379.594 1.431 1.431 0 0 1-1.705-1.419V6.809a1.977 1.977 0 0 0-1.508-1.945 25.481 25.481 0 0 0-5.575-.614A25.05 25.05 0 0 0 10 7.712v19.832a24.989 24.989 0 0 1 12.765-3.461 1.44 1.44 0 0 1 1.4 1.439v3.807a2.009 2.009 0 0 0 2.843 1.812 25.25 25.25 0 0 1 14.637-1.568A1.982 1.982 0 0 0 44 27.619V11.848A1.979 1.979 0 0 0 42.491 9.9a25.527 25.527 0 0 0-5.574-.611Z" />
                <rect height="42" rx="1" ry="1" width="4" x="2" y="4" />
            </svg>
        );
    },
);
