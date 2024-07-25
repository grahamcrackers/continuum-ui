import * as React from "react";

import { iconVariants } from "../../helpers";
import type { IconProps } from "../../helpers";

export const Cross600Icon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="m9.518 8 5.23-5.228a1.073 1.073 0 0 0-1.518-1.518L8.001 6.483l-5.229-5.23a1.073 1.073 0 0 0-1.518 1.519L6.483 8l-5.23 5.229a1.073 1.073 0 1 0 1.518 1.518l5.23-5.23 5.228 5.23a1.073 1.073 0 0 0 1.518-1.518z" />
            </svg>
        );
    },
);
