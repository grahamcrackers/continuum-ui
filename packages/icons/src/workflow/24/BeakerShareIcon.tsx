import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const BeakerShareIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M30 2H14a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2v8.358a8 8 0 0 1-.647 3.151L4.389 40.424A4 4 0 0 0 8.066 46h8.469V30.64L12.272 32l4.78-11.3A12 12 0 0 0 18 16.022V8h8v8.059a12 12 0 0 0 .919 4.607l.515 1.24 2.941-3.262A7.957 7.957 0 0 1 30 16.358V8a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2Z" />
            </svg>
        );
    },
);
