import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const RedoIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M4.006 26.6C4.219 19.485 10.427 14 17.545 14H34V8a1 1 0 0 1 1.707-.7l9.147 9.351a.5.5 0 0 1 0 .708l-9.147 9.353A1 1 0 0 1 34 26v-6H17.4a7.267 7.267 0 0 0-7.386 6.624A7 7 0 0 0 17 34h8a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-8A13 13 0 0 1 4.006 26.6Z" />
            </svg>
        );
    },
);
