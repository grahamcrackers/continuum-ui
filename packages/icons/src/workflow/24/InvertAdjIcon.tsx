import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const InvertAdjIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M24.5 11a13.494 13.494 0 0 0-10.49 21.99l20.038-18.033A13.455 13.455 0 0 0 24.5 11Z" />
                <path d="M46 2H2a2 2 0 0 0-2 2v40a2 2 0 0 0 2 2h44a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2Zm-8 22.5a13.5 13.5 0 0 1-23.99 8.49L4 42V6h40l-9.952 8.957A13.453 13.453 0 0 1 38 24.5Z" />
            </svg>
        );
    },
);
