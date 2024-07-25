import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const GraphAreaIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M39.755 25.511 44 34v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V24l12.5 15 4.2-6.294a1 1 0 0 1 1.646-.027l5.404 7.571 10.289-14.861a1 1 0 0 1 1.716.122Z" />
                <path d="m16.144 32.324 2.832-4.248A3 3 0 0 1 23.913 28l3.787 5.3 8.974-12.962a3 3 0 0 1 5.15.366L44 25.055V4L34 16l-5.235-8.725a1 1 0 0 0-1.658-.085L11.993 27.343Z" />
            </svg>
        );
    },
);
