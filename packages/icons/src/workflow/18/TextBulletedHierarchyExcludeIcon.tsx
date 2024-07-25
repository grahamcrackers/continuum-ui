import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const TextBulletedHierarchyExcludeIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M27 18.1a8.9 8.9 0 1 0 8.9 8.9 8.9 8.9 0 0 0-8.9-8.9ZM20 27a6.929 6.929 0 0 1 1.475-4.252l9.777 9.777A6.966 6.966 0 0 1 20 27Zm12.525 4.252-9.777-9.777a6.966 6.966 0 0 1 9.777 9.777Z" />
                <rect height="6" rx="2.8" ry="2.8" width="6" y="2" />
                <rect height="6" rx="2.8" ry="2.8" width="6" x="6" y="14" />
                <rect height="6" rx="2.8" ry="2.8" width="6" x="6" y="26" />
                <rect height="4" rx="1" ry="1" width="22" x="8" y="4" />
                <path d="M27 16H15a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h3.515A10.975 10.975 0 0 1 27 16ZM16.05 28H15a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2.21a10.942 10.942 0 0 1-1.16-4Z" />
            </svg>
        );
    },
);
