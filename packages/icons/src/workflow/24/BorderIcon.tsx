import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const BorderIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M4 5.818v36.364A1.818 1.818 0 0 0 5.818 44h36.364A1.818 1.818 0 0 0 44 42.182V5.818A1.818 1.818 0 0 0 42.182 4H5.818A1.818 1.818 0 0 0 4 5.818ZM40 40H8V8h32Z" />
                <path d="M10 10v28h28V10Zm24 24H14V14h20Z" />
            </svg>
        );
    },
);
