import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const ArtboardIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="m43.414 20.414-7.828-7.828A2 2 0 0 0 34.172 12H14a2 2 0 0 0-2 2v28a2 2 0 0 0 2 2h28a2 2 0 0 0 2-2V21.828a2 2 0 0 0-.586-1.414ZM40 40H16V16h16v6a2 2 0 0 0 2 2h6Z" />
                <rect height="8" rx="1" ry="1" width="4" x="12" y="2" />
                <rect height="4" rx="1" ry="1" width="8" x="2" y="12" />
            </svg>
        );
    },
);
