import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const ClockIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M26 22.086V11a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v12.586a1 1 0 0 0 .293.707l6.3 6.3a1 1 0 0 0 1.414 0l1.336-1.336a1 1 0 0 0 0-1.414l-5.054-5.054a1 1 0 0 1-.289-.703Z" />
                <path d="M24 7.8A16.2 16.2 0 1 1 7.8 24 16.218 16.218 0 0 1 24 7.8ZM24 4a20 20 0 1 0 20 20A20 20 0 0 0 24 4Z" />
            </svg>
        );
    },
);
