import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const FlagExcludeIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <rect height="40" rx="1" ry="1" width="4" x="4" y="4" />
                <path d="M24.147 25.427A15.831 15.831 0 0 1 44 22.275V11.394a1.42 1.42 0 0 0-1.064-1.387 25.5 25.5 0 0 0-6.019-.717 24.822 24.822 0 0 0-5.379.594 1.43 1.43 0 0 1-1.705-1.418V6.354a1.42 1.42 0 0 0-1.064-1.387 25.477 25.477 0 0 0-6.019-.717A25.406 25.406 0 0 0 10 8.168V28a25.336 25.336 0 0 1 12.762-3.917 1.425 1.425 0 0 1 1.385 1.344Z" />
                <path d="M36 24.1A11.9 11.9 0 1 0 47.9 36 11.9 11.9 0 0 0 36 24.1ZM44.925 36a8.859 8.859 0 0 1-1.663 5.158l-12.42-12.42A8.9 8.9 0 0 1 44.925 36Zm-17.85 0a8.859 8.859 0 0 1 1.663-5.158l12.42 12.42A8.9 8.9 0 0 1 27.075 36Z" />
            </svg>
        );
    },
);
