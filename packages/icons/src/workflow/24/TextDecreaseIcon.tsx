import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const TextDecreaseIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M47.9 36A11.9 11.9 0 1 0 36 47.9 11.9 11.9 0 0 0 47.9 36Zm-5.165-2.9-6.312 9.989a.5.5 0 0 1-.846 0L29.265 33.1a.668.668 0 0 1 .5-1.108h12.466a.668.668 0 0 1 .504 1.108Z" />
                <path d="M20.239 38A21.4 21.4 0 0 1 20 34V10h10v5a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V8a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v7a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-5h10v28h-3a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h10.28a15.814 15.814 0 0 1-1.041-4Z" />
            </svg>
        );
    },
);
