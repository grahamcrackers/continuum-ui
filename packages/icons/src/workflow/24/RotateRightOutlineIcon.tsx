import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const RotateRightOutlineIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M27 2h5a10 10 0 0 1 10 10v4h4.2a.8.8 0 0 1 .8.806.785.785 0 0 1-.236.56l-6.435 6.488a.5.5 0 0 1-.707 0l-6.386-6.488a.785.785 0 0 1-.236-.56.8.8 0 0 1 .8-.806H38v-4.387A5.613 5.613 0 0 0 32.387 6H27a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1ZM4 18h22v22H4Zm-2-4a2 2 0 0 0-2 2v26a2 2 0 0 0 2 2h26a2 2 0 0 0 2-2V16a2 2 0 0 0-2-2Z" />
            </svg>
        );
    },
);
