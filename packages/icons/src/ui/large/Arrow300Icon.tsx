import * as React from "react";

import { iconVariants } from "../../helpers";
import type { IconProps } from "../../helpers";

export const Arrow300Icon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="m15.364 7.161-5.083-5.083a1.186 1.186 0 0 0-1.678 1.678l3.057 3.058H1.277a1.187 1.187 0 1 0 0 2.373H11.66l-3.056 3.057a1.186 1.186 0 1 0 1.677 1.678l5.083-5.083a1.185 1.185 0 0 0 0-1.678" />
            </svg>
        );
    },
);
