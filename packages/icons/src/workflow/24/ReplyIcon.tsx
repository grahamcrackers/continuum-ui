import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const ReplyIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M20.147 14H20V7a1 1 0 0 0-1.006-1 .979.979 0 0 0-.658.255l-14 14a1 1 0 0 0 0 1.494l14 14a.979.979 0 0 0 .658.255A1 1 0 0 0 20 35v-7c10-2 18 4 22.48 9.65a.842.842 0 0 0 1.52-.5C44 33.43 39.891 14 20.147 14Z" />
            </svg>
        );
    },
);
