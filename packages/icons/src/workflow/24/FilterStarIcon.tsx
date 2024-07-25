import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const FilterStarIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M20.3 36c0-4.157 1.449-7.322 4.265-10.735S39.621 6.388 39.621 6.388A1.464 1.464 0 0 0 38.486 4H1.529A1.464 1.464 0 0 0 .393 6.388l15.686 19.671v18.417a1.464 1.464 0 0 0 2.46 1.073l3.256-2.886A14.465 14.465 0 0 1 20.3 36Z" />
                <path d="M36 24.1A11.9 11.9 0 1 0 47.9 36 11.9 11.9 0 0 0 36 24.1Zm.221 4.052 2 5.29 5.649.267a.236.236 0 0 1 .136.42l-4.413 3.537 1.491 5.455a.236.236 0 0 1-.357.259L36 40.277l-4.728 3.1a.236.236 0 0 1-.357-.259l1.491-5.455-4.412-3.533a.236.236 0 0 1 .136-.42l5.649-.267 2-5.29a.236.236 0 0 1 .442-.001Z" />
            </svg>
        );
    },
);
