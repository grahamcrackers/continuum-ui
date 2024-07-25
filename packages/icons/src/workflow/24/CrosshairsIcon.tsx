import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const CrosshairsIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M24 4a20 20 0 1 0 20 20A20 20 0 0 0 24 4Zm2 35.862V32h-4v7.862A15.989 15.989 0 0 1 8.138 26H16v-4H8.138A15.989 15.989 0 0 1 22 8.138V16h4V8.138A15.989 15.989 0 0 1 39.862 22H32v4h7.862A15.989 15.989 0 0 1 26 39.862Z" />
                <circle cx="24" cy="24" r="2.2" />
            </svg>
        );
    },
);
