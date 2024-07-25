import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const SortOrderDownIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <rect height="4" rx="1" ry="1" width="12" x="2" y="24" />
                <rect height="4" rx="1" ry="1" width="16" x="2" y="16" />
                <rect height="4" rx="1" ry="1" width="20" x="2" y="8" />
                <path d="M32 24h-2.007V9a.988.988 0 0 0-.987-1h-.992a1 1 0 0 0-1 1l-.007 15H25a.5.5 0 0 0-.5.5.49.49 0 0 0 .147.35l3.537 4.033a.5.5 0 0 0 .632 0l3.537-4.033a.49.49 0 0 0 .147-.35.5.5 0 0 0-.5-.5Z" />
            </svg>
        );
    },
);
