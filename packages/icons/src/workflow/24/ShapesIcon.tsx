import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const ShapesIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M25.224 40.451a14.112 14.112 0 0 1-9.108-10.413l-.035-.156H4.323a.614.614 0 0 1-.539-.313.6.6 0 0 1 0-.617L16.438 6.806a.62.62 0 0 1 1.076 0l4.717 8.258.178-.114a13.421 13.421 0 0 1 3.614-1.663 14.283 14.283 0 1 1-.8 27.166ZM19.18 30.136a11.3 11.3 0 1 0 4.676-12.615l-.158.1 6.472 11.33a.621.621 0 0 1-.537.928H19.106Z" />
            </svg>
        );
    },
);
