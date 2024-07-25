import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const CheckmarkCircleOutlineIcon = React.forwardRef<SVGSVGElement, IconProps>(
    ({ className, size, focusable = false, hidden = true, color = "currentColor", ...props }, forwardedRef) => {
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="36"
                viewBox="0 0 36 36"
                className={iconVariants({ size, className })}
                focusable={focusable}
                aria-hidden={hidden}
                {...props}
                ref={forwardedRef}
            >
                <path d="M18.1 2.2A15.9 15.9 0 1 0 34 18.1 15.9 15.9 0 0 0 18.1 2.2Zm0 29.812A13.912 13.912 0 1 1 32.012 18.1 13.912 13.912 0 0 1 18.1 32.012Zm8.981-19.377L16.21 26.611a1 1 0 0 1-1.496.092l-6.157-6.131a1 1 0 0 1 0-1.415l1.325-1.325a1 1 0 0 1 1.414 0l3.878 3.844 8.875-11.402a1 1 0 0 1 1.403-.175l1.455 1.133a1 1 0 0 1 .175 1.403Z" />
            </svg>
        );
    },
);
