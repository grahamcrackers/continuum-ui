import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const TextExcludeIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M20 38V10h10v5a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V8a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v7a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-5h10v28h-3a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h10a8.289 8.289 0 0 1-1-4Z" />
                <path d="M36 24.1A11.9 11.9 0 1 0 47.9 36 11.9 11.9 0 0 0 36 24.1ZM44.925 36a8.865 8.865 0 0 1-1.663 5.159l-12.42-12.421A8.9 8.9 0 0 1 44.925 36Zm-17.85 0a8.862 8.862 0 0 1 1.663-5.158l12.42 12.42A8.9 8.9 0 0 1 27.075 36Z" />
            </svg>
        );
    },
);
