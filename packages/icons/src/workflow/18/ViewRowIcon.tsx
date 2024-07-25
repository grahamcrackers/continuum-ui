import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const ViewRowIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M34 10H2V3a1 1 0 0 1 1-1h30a1 1 0 0 1 1 1ZM2 14h32v8H2zM33 34H3a1 1 0 0 1-1-1v-7h32v7a1 1 0 0 1-1 1Z" />
            </svg>
        );
    },
);
