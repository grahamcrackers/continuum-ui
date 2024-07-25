import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const PlugIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M4.3 35.408a8.8 8.8 0 0 1 0-12.445l6.223-6.223a2.934 2.934 0 0 1 0-4.148l4.148-4.148a2.934 2.934 0 0 1 4.148 0l2.074 2.074 9.334-9.334a1.467 1.467 0 0 1 2.074 0l2.074 2.074a1.467 1.467 0 0 1 0 2.074l-9.334 9.334 8.3 8.3 9.334-9.334a1.467 1.467 0 0 1 2.074 0l2.067 2.068a1.467 1.467 0 0 1 0 2.074l-9.334 9.334 2.074 2.074a2.934 2.934 0 0 1 0 4.148l-4.148 4.148a2.934 2.934 0 0 1-4.148 0L25.037 43.7a8.8 8.8 0 0 1-12.445 0Z" />
            </svg>
        );
    },
);
