import * as React from "react";

import { iconVariants } from "../../helpers";
import type { IconProps } from "../../helpers";

export const Chevron400Icon = React.forwardRef<SVGSVGElement, IconProps>(
    ({ className, size, focusable = false, hidden = true, color = "currentColor", ...props }, forwardedRef) => {
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                className={iconVariants({ size, className })}
                focusable={focusable}
                aria-hidden={hidden}
                {...props}
                ref={forwardedRef}
            >
                <path d="M4.97 15.044a.989.989 0 0 1-.698-1.688L9.627 8 4.27 2.644a.989.989 0 0 1 1.4-1.398L11.726 7.3a.99.99 0 0 1 0 1.398L5.67 14.754a1 1 0 0 1-.7.29" />
            </svg>
        );
    },
);
