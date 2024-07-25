import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const RotateLeftIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M20 14a2 2 0 0 0-2 2v26a2 2 0 0 0 2 2h26a2 2 0 0 0 2-2V16a2 2 0 0 0-2-2ZM21 4h-5A10 10 0 0 0 6 14v4H1.8a.8.8 0 0 0-.8.806.785.785 0 0 0 .236.56l6.435 6.488a.5.5 0 0 0 .707 0l6.386-6.488a.785.785 0 0 0 .236-.56.8.8 0 0 0-.8-.806H10v-4.387A5.613 5.613 0 0 1 15.613 8H21a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1Z" />
            </svg>
        );
    },
);
