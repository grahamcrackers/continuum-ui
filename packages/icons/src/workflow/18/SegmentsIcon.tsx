import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const SegmentsIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M11.118 14h23.764A1.119 1.119 0 0 0 36 12.882V5.118A1.118 1.118 0 0 0 34.882 4H11.118A1.118 1.118 0 0 0 10 5.118V8H6a2 2 0 0 0-2 2v3.1a5 5 0 0 0 0 9.8V26a2 2 0 0 0 2 2h4v2.882A1.119 1.119 0 0 0 11.118 32h23.764A1.119 1.119 0 0 0 36 30.882v-7.764A1.118 1.118 0 0 0 34.882 22H11.118A1.118 1.118 0 0 0 10 23.118V26H6v-3.1a5 5 0 0 0 0-9.8V10h4v2.882A1.119 1.119 0 0 0 11.118 14ZM8 18a3 3 0 1 1-3-3 3 3 0 0 1 3 3Z" />
            </svg>
        );
    },
);
