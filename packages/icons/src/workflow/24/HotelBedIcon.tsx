import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const HotelBedIcon = React.forwardRef<SVGSVGElement, IconProps>(
    ({ className, size, focusable = false, hidden = true, color = "currentColor", ...props }, forwardedRef) => {
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 48 48"
                className={iconVariants({ size, className })}
                focusable={focusable}
                aria-hidden={hidden}
                {...props}
                ref={forwardedRef}
            >
                <path d="M48 28H0l8-10h32ZM0 30v6a2 2 0 0 0 2 2h44a2 2 0 0 0 2-2v-6Zm10 13v-3H6v3a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1Zm32 0v-3h-4v3a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1ZM38 8H10a2 2 0 0 0-2 2v6h2v-2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2h4v-2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2h2v-6a2 2 0 0 0-2-2Z" />
            </svg>
        );
    },
);
