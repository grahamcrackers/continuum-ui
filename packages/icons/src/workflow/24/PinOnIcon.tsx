import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const PinOnIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="m8.375 36.719 2.938 2.937-3.747 3.658A1 1 0 0 1 6.14 43.3l-1.433-1.5a1 1 0 0 1 .014-1.4ZM23.561 42.053h.009l.051-7.442 10.236-10.234 2.8-.03.006-.011a1.785 1.785 0 0 0 1.248-3.048l-5.6-5.6-5.6-5.6a1.785 1.785 0 0 0-3.047 1.248h-.01l-.033 2.8-10.232 10.242-7.44.054v.008a1.761 1.761 0 0 0-1.363.511 1.785 1.785 0 0 0 0 2.527l7.971 7.971 7.968 7.971a1.78 1.78 0 0 0 3.04-1.367Z" />
            </svg>
        );
    },
);
