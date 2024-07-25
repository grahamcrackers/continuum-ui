import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const MultipleIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <rect height="20" rx="2.5" ry="2.5" width="20" x="4" y="24" />
                <path d="M31.5 14h-15a2.5 2.5 0 0 0-2.5 2.5V20h12a2 2 0 0 1 2 2v12h3.5a2.5 2.5 0 0 0 2.5-2.5v-15a2.5 2.5 0 0 0-2.5-2.5Z" />
                <path d="M41.5 4h-15A2.5 2.5 0 0 0 24 6.5V10h12a2 2 0 0 1 2 2v12h3.5a2.5 2.5 0 0 0 2.5-2.5v-15A2.5 2.5 0 0 0 41.5 4Z" />
            </svg>
        );
    },
);
