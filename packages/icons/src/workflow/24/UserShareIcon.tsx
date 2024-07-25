import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const UserShareIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M16 32a6 6 0 0 1 6-6h2v-4a2.638 2.638 0 0 1 .462-1.419 16.806 16.806 0 0 0 2.979-9.465c0-6.72-3.282-9.89-8.242-9.89s-8.336 3.317-8.336 9.89a16.927 16.927 0 0 0 3.126 9.469 1.949 1.949 0 0 1 .434 1.2v2.683a1.947 1.947 0 0 1-1.67 1.887C2.071 27.494 0 34.7 0 37.6V40h16ZM39.722 26.331 34 20l-5.708 6.331A1 1 0 0 0 29.035 28H32v11.5a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5V28h2.979a1 1 0 0 0 .743-1.669Z" />
                <path d="M47 30h-7v4h4v10H24V34h4v-4h-7a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h26a1 1 0 0 0 1-1V31a1 1 0 0 0-1-1Z" />
            </svg>
        );
    },
);
