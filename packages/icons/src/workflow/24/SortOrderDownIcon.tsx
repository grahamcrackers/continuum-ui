import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const SortOrderDownIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <rect height="4" rx="1" ry="1" width="28" x="4" y="12" />
                <rect height="4" rx="1" ry="1" width="24" x="4" y="22" />
                <rect height="4" rx="1" ry="1" width="20" x="4" y="32" />
                <path d="M45.2 32H42V13a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v19h-3.2a.8.8 0 0 0-.8.806.785.785 0 0 0 .236.56l5.451 5.524a.5.5 0 0 0 .626 0l5.451-5.524a.785.785 0 0 0 .236-.56.8.8 0 0 0-.8-.806Z" />
            </svg>
        );
    },
);
