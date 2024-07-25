import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const PromoteIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M10 10a8 8 0 0 0 0 16h8V10ZM19.438 46h-3.876a2 2 0 0 1-1.941-1.515L10 30h8l3.379 13.515A2 2 0 0 1 19.438 46ZM43.9 33.379A31.355 31.355 0 0 0 24 26h-2V10h2a31.969 31.969 0 0 0 19.9-7.379A1.78 1.78 0 0 1 46 4.562v26.876a1.78 1.78 0 0 1-2.1 1.941Z" />
            </svg>
        );
    },
);
