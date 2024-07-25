import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const EventShareIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M4 4h24v13.4l1.556 1.556L32 16.245V0H0v32h8v-4H4V4z" />
                <path d="M16 28a2 2 0 0 1 2-2h6.187a4.825 4.825 0 0 1 1.134-2.347l1.443-1.6L12.854 8.2a.489.489 0 0 0-.35-.147.5.5 0 0 0-.5.5v26.782a.5.5 0 0 0 .5.5.489.489 0 0 0 .35-.147L16 32.535ZM47 30h-7v4h4v10H24V34h4v-4h-7a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h26a1 1 0 0 0 1-1V31a1 1 0 0 0-1-1Z" />
                <path d="M39.722 26.331 34 20l-5.708 6.331A1 1 0 0 0 29.035 28H32v11.5a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5V28h2.979a1 1 0 0 0 .743-1.669Z" />
            </svg>
        );
    },
);
