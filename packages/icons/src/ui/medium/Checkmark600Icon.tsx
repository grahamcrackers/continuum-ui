import * as React from "react";

import { iconVariants } from "../../helpers";
import type { IconProps } from "../../helpers";

export const Checkmark600Icon = React.forwardRef<SVGSVGElement, IconProps>(
    ({ className, size, focusable = false, hidden = true, color = "currentColor", ...props }, forwardedRef) => {
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 18 18"
                className={iconVariants({ size, className })}
                focusable={focusable}
                aria-hidden={hidden}
                {...props}
                ref={forwardedRef}
            >
                <path d="M6.297 16.534a1.23 1.23 0 0 1-.942-.442L.48 10.244a1.227 1.227 0 0 1 1.885-1.57l3.904 4.684L15.6 1.482a1.227 1.227 0 0 1 1.93 1.516L7.262 16.065a1.23 1.23 0 0 1-.947.469z" />
            </svg>
        );
    },
);
