import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const TextIndentIncreaseIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <rect height="4" rx="1" ry="1" width="32" x="12" y="6" />
                <rect height="4" rx="1" ry="1" width="20" x="24" y="14" />
                <rect height="4" rx="1" ry="1" width="20" x="24" y="22" />
                <rect height="4" rx="1" ry="1" width="20" x="24" y="30" />
                <rect height="4" rx="1" ry="1" width="32" x="12" y="38" />
                <path d="M10 20v-5.341a.5.5 0 0 1 .864-.343L20 24l-9.136 9.684a.5.5 0 0 1-.864-.343V28H1a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1Z" />
            </svg>
        );
    },
);
