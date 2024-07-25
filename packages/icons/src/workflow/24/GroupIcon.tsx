import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const GroupIcon = React.forwardRef<SVGSVGElement, IconProps>(
    ({ className, size, focusable = false, hidden = true, color = "currentColor", ...props }, forwardedRef) => {
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 48 48"
                className={iconVariants({ size, className })}
                focusable={focusable}
                aria-hidden={hidden}
                {...props}
                ref={forwardedRef}
            >
                <rect x="10" y="10" width="12" height="12" rx="1" />
                <rect x="26" y="16" width="12" height="12" rx="1" />
                <rect x="12" y="26" width="12" height="12" rx="1" />
                <path d="M43 4H5a1 1 0 0 0-1 1v38a1 1 0 0 0 1 1h38a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1Zm-3 36H8V8h32Z" />
            </svg>
        );
    },
);
