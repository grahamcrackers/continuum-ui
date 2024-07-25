import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const LinkOutIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M43.5 4H30a1 1 0 0 0-1 1.007.978.978 0 0 0 .295.7l3.671 3.672-9.378 9.379a1 1 0 0 0 0 1.414l4.242 4.242a1 1 0 0 0 1.414 0l9.379-9.378 3.672 3.671a.978.978 0 0 0 .7.295A1 1 0 0 0 44 18V4.5a.5.5 0 0 0-.5-.5Z" />
                <path d="M40 27v13H8V8h13a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H6a2 2 0 0 0-2 2v36a2 2 0 0 0 2 2h36a2 2 0 0 0 2-2V27a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1Z" />
            </svg>
        );
    },
);
