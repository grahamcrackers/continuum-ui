import * as React from "react";

import { iconVariants } from "../../helpers";
import type { IconProps } from "../../helpers";

export const Checkmark100Icon = React.forwardRef<SVGSVGElement, IconProps>(
    ({ className, size, focusable = false, hidden = true, color = "currentColor", ...props }, forwardedRef) => {
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 14 14"
                className={iconVariants({ size, className })}
                focusable={focusable}
                aria-hidden={hidden}
                {...props}
                ref={forwardedRef}
            >
                <path d="M5.125 12.625a1.25 1.25 0 0 1-.96-.45L1.04 8.425a1.25 1.25 0 0 1 1.92-1.6l2.136 2.563 5.922-7.536a1.25 1.25 0 1 1 1.964 1.545l-6.874 8.75a1.25 1.25 0 0 1-.965.478z" />
            </svg>
        );
    },
);
