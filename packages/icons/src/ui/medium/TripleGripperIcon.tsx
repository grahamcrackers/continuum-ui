import * as React from "react";

import { iconVariants } from "../../helpers";
import type { IconProps } from "../../helpers";

export const TripleGripperIcon = React.forwardRef<SVGSVGElement, IconProps>(
    ({ className, size, focusable = false, hidden = true, color = "currentColor", ...props }, forwardedRef) => {
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 10 8"
                className={iconVariants({ size, className })}
                focusable={focusable}
                aria-hidden={hidden}
                {...props}
                ref={forwardedRef}
            >
                <path d="M9.45 1.05H.55a.5.5 0 0 1 0-1h8.9a.5.5 0 0 1 0 1m.5 2.45a.5.5 0 0 0-.5-.5H.55a.5.5 0 0 0 0 1h8.9a.5.5 0 0 0 .5-.5m0 3a.5.5 0 0 0-.5-.5H.55a.5.5 0 0 0 0 1h8.9a.5.5 0 0 0 .5-.5" />
            </svg>
        );
    },
);
