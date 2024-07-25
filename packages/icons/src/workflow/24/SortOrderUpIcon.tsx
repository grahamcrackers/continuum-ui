import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const SortOrderUpIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <rect height="4" rx="1" ry="1" width="28" x="4" y="32" />
                <rect height="4" rx="1" ry="1" width="24" x="4" y="22" />
                <rect height="4" rx="1" ry="1" width="20" x="4" y="12" />
                <path d="M45.764 14.634 40.313 9.11a.5.5 0 0 0-.626 0l-5.451 5.524a.785.785 0 0 0-.236.56.8.8 0 0 0 .8.806H38v19a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V16h3.2a.8.8 0 0 0 .8-.806.785.785 0 0 0-.236-.56Z" />
            </svg>
        );
    },
);
