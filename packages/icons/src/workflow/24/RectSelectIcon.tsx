import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const RectSelectIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M10 38H8v-2H4v4a2 2 0 0 0 2 2h4ZM4 16h4v6H4zM4 26h4v6H4zM8 10h2V6H6a2 2 0 0 0-2 2v4h4ZM14 38h8v4h-8zM26 38h8v4h-8zM40 26h4v6h-4zM40 16h4v6h-4zM42 6h-4v4h2v2h4V8a2 2 0 0 0-2-2ZM40 38h-2v4h4a2 2 0 0 0 2-2v-4h-4ZM14 6h8v4h-8zM26 6h8v4h-8z" />
            </svg>
        );
    },
);
