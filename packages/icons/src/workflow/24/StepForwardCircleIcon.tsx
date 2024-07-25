import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const StepForwardCircleIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M24 4.1A19.9 19.9 0 1 0 43.9 24 19.9 19.9 0 0 0 24 4.1ZM20 33a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1V15a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1Zm5.581.83A1 1 0 0 1 24 33.017V14.983a1 1 0 0 1 1.581-.813L38.2 23.187a1 1 0 0 1 0 1.626Z" />
            </svg>
        );
    },
);
