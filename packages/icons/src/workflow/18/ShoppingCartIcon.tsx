import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const ShoppingCartIcon = React.forwardRef<SVGSVGElement, IconProps>(
    ({ className, size, focusable = false, hidden = true, color = "currentColor", ...props }, forwardedRef) => {
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                height="36"
                viewBox="0 0 36 36"
                width="36"
                className={iconVariants({ size, className })}
                focusable={focusable}
                aria-hidden={hidden}
                {...props}
                ref={forwardedRef}
            >
                <ellipse cx="10.445" cy="31.143" rx="2.667" ry="2.917" />
                <ellipse cx="25.778" cy="31.143" rx="2.667" ry="2.917" />
                <path d="M29.326 24H10.469l.762-2.6H28a1.331 1.331 0 0 0 1.307-1.071L33.974 7.66a1.334 1.334 0 0 0-1.308-1.595h-.126v-.03H6.5l-1.289-3.5A1.335 1.335 0 0 0 3.889 1.4H1.333a1.334 1.334 0 0 0 0 2.667h1.406L8.667 20l-1.294 5.075A1.569 1.569 0 0 0 8.667 27h20.666a1.589 1.589 0 0 0 1.334-1.6 1.4 1.4 0 0 0-1.341-1.4ZM7.529 8.835H30.6l-3.693 9.9H11.174Z" />
            </svg>
        );
    },
);
