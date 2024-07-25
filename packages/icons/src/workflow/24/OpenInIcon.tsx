import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const OpenInIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M8 19V8h32v32H29a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h13a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v13a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1Z" />
                <path d="M23.5 24H10a1 1 0 0 0-1 1.007.978.978 0 0 0 .295.7l3.671 3.672-9.38 9.379a1 1 0 0 0 0 1.414l4.242 4.242a1 1 0 0 0 1.414 0l9.379-9.378 3.672 3.671a.978.978 0 0 0 .7.3A1 1 0 0 0 24 38V24.5a.5.5 0 0 0-.5-.5Z" />
            </svg>
        );
    },
);
