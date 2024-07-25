import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const PortraitIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <circle cx="24" cy="13" r="4.5" />
                <path d="M40 2H8a2 2 0 0 0-2 2v40a2 2 0 0 0 2 2h32a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2Zm-2 40h-8v-8a2 2 0 0 0 2-2v-8a4 4 0 0 0-4-4h-8a4 4 0 0 0-4 4v8a2 2 0 0 0 2 2v8h-8V6h28Z" />
            </svg>
        );
    },
);
