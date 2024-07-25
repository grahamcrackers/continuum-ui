import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const TextBulletedHierarchyExcludeIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M36 24.1A11.9 11.9 0 1 0 47.9 36 11.9 11.9 0 0 0 36 24.1ZM44.925 36a8.865 8.865 0 0 1-1.663 5.159l-12.42-12.421A8.9 8.9 0 0 1 44.925 36Zm-17.85 0a8.862 8.862 0 0 1 1.663-5.158l12.42 12.42A8.9 8.9 0 0 1 27.075 36Z" />
                <rect height="4" rx="1" ry="1" width="28" x="12" y="8" />
                <circle cx="4" cy="8" r="4" />
                <circle cx="10" cy="24" r="4" />
                <circle cx="10" cy="40" r="4" />
                <path d="M25.6 24H19a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h3.281a16 16 0 0 1 3.319-4ZM20.629 40H19a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h3.281a15.849 15.849 0 0 1-1.652-4Z" />
            </svg>
        );
    },
);
