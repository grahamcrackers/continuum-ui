import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const HotFixesIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M19.7 3.492a1 1 0 0 0-1.741.872 18.362 18.362 0 0 1 .508 7.4c-.607 3.15-2.079 5.416-3.881 8.219a35.643 35.643 0 0 0-3.825 7.406 13.882 13.882 0 1 0 26.989 4.59v-.05c-.095-6.089-3.606-14.37-7.343-20.278a1 1 0 0 0-1.846.547c.223 10.254-5.384 13.921-5.384 13.921S27.693 13.332 19.7 3.492Z" />
            </svg>
        );
    },
);
