import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const ReorderIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M18 4a.994.994 0 0 0-.747.336l-11 10a.979.979 0 0 0-.253.658A1 1 0 0 0 7 16h22a1 1 0 0 0 1-1.006.979.979 0 0 0-.255-.658l-11-10A1 1 0 0 0 18 4ZM18 32a1 1 0 0 0 .747-.336l11-10a.979.979 0 0 0 .253-.658A1 1 0 0 0 29 20H7a1 1 0 0 0-1 1.006.979.979 0 0 0 .255.658l11 10A.994.994 0 0 0 18 32Z" />
            </svg>
        );
    },
);
