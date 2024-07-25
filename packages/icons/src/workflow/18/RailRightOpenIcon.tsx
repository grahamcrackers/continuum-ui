import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const RailRightOpenIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M14 14h9.006a.994.994 0 0 1 .994.994v6.012a.994.994 0 0 1-.994.994H14v8.912a.5.5 0 0 1-.848.351L0 18 13.152 4.736a.5.5 0 0 1 .848.352Z" />
                <rect height="28" rx=".707" ry=".707" width="4" x="28" y="4" />
            </svg>
        );
    },
);
