import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const StepForwardIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <rect height="28" rx="1" ry="1" width="8" x="2" y="4" />
                <path d="M16 30.919V5.081a1 1 0 0 1 1.625-.781l16.149 12.919a1 1 0 0 1 0 1.562L17.625 31.7A1 1 0 0 1 16 30.919Z" />
            </svg>
        );
    },
);
