import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const TextBulletedIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <rect height="4" rx="1" ry="1" width="28" x="16" y="8" />
                <rect height="4" rx="1" ry="1" width="28" x="16" y="24" />
                <rect height="4" rx="1" ry="1" width="28" x="16" y="40" />
                <circle cx="8" cy="8" r="4" />
                <circle cx="8" cy="24" r="4" />
                <circle cx="8" cy="40" r="4" />
            </svg>
        );
    },
);
