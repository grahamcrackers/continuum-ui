import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const ViewRowIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M42 16H4V8a2 2 0 0 1 2-2h34a2 2 0 0 1 2 2ZM4 20h38v10H4zM40 44H6a2 2 0 0 1-2-2v-8h38v8a2 2 0 0 1-2 2Z" />
            </svg>
        );
    },
);
