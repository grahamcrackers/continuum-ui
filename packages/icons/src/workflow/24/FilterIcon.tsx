import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const FilterIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M42.885 4H5.119a1.464 1.464 0 0 0-1.136 2.388l16.1 19.671v18.417a1.463 1.463 0 0 0 2.459 1.073l4.93-5.444a1.464 1.464 0 0 0 .49-1.093V26.027L44.021 6.388A1.464 1.464 0 0 0 42.885 4Z" />
            </svg>
        );
    },
);
