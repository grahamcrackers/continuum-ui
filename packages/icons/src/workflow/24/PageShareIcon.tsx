import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const PageShareIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M39.722 26.331 34 20l-5.708 6.331A1 1 0 0 0 29.035 28H32v11.5a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5V28h2.979a1 1 0 0 0 .743-1.669Z" />
                <path d="M47 30h-7v4h4v10H24V34h4v-4h-7a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h26a1 1 0 0 0 1-1V31a1 1 0 0 0-1-1Z" />
                <path d="M16 38H6V14h36v12h4V8a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v32a2 2 0 0 0 2 2h12Z" />
            </svg>
        );
    },
);
