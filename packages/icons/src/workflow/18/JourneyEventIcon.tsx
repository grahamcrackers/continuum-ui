import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const JourneyEventIcon = React.forwardRef<SVGSVGElement, IconProps>(
    ({ className, size, focusable = false, hidden = true, color = "currentColor", ...props }, forwardedRef) => {
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                height="36"
                viewBox="0 0 36 36"
                width="36"
                className={iconVariants({ size, className })}
                focusable={focusable}
                aria-hidden={hidden}
                {...props}
                ref={forwardedRef}
            >
                <path d="M27 18a9 9 0 1 0 9 9 9 9 0 0 0-9-9Zm4.081 9.748-5.927 6.778a.613.613 0 0 1-1.027-.642l2-4.749-2.827-1.214a1.059 1.059 0 0 1-.379-1.67l5.928-6.777a.613.613 0 0 1 1.026.642l-2 4.749 2.825 1.214a1.058 1.058 0 0 1 .381 1.669Z" />
                <path d="M16 26c0 .114.024.222.034.334A10.924 10.924 0 0 1 18 20.687V10a2 2 0 0 1 2-2h4.1a5 5 0 1 0 0-2H20a4 4 0 0 0-4 4v6h-4.1a5 5 0 1 0 0 2H16ZM29 4a3 3 0 1 1-3 3 3 3 0 0 1 3-3ZM7 20a3 3 0 1 1 3-3 3 3 0 0 1-3 3Z" />
            </svg>
        );
    },
);
