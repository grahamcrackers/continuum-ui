import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const ReorderIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M25 4a.994.994 0 0 0-.747.336l-14 14a.979.979 0 0 0-.255.658A1 1 0 0 0 11 20h28a1 1 0 0 0 1-1.006.979.979 0 0 0-.255-.658l-14-14A1 1 0 0 0 25 4ZM25 44a1 1 0 0 0 .747-.336l14-14a.979.979 0 0 0 .253-.658A1 1 0 0 0 39 28H11a1 1 0 0 0-1 1.006.979.979 0 0 0 .255.658l14 14A.994.994 0 0 0 25 44Z" />
            </svg>
        );
    },
);
