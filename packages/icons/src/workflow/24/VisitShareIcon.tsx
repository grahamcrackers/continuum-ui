import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const VisitShareIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M47 30h-7v4h4v10H24V34h4v-4h-7a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h26a1 1 0 0 0 1-1V31a1 1 0 0 0-1-1Z" />
                <path d="M39.722 26.331 34 20l-5.708 6.331A1 1 0 0 0 29.035 28H32v11.5a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5V28h2.979a1 1 0 0 0 .743-1.669Z" />
                <path d="M4 8h32v8.247l4 4.426V4a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v28a1.981 1.981 0 0 0 1.8 1.96A14.3 14.3 0 0 1 7.532 30H4Z" />
                <path d="M16 31a5 5 0 0 1 5-5h2.981a14.787 14.787 0 0 0 1.3-5.838c0-5.546-2.709-8.162-6.8-8.162s-6.88 2.738-6.88 8.162a13.97 13.97 0 0 0 2.58 7.815 1.606 1.606 0 0 1 .358.99v2.214a1.607 1.607 0 0 1-1.378 1.557c-8.818.941-10.527 6.886-10.527 9.282V44H16Z" />
            </svg>
        );
    },
);
