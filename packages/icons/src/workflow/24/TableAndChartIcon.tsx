import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const TableAndChartIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <rect height="6" rx="1" ry="1" width="12" x="2" y="14" />
                <rect height="12" rx="1" ry="1" width="12" x="18" y="8" />
                <path d="M45 0H35a1 1 0 0 0-1 1v19h12V1a1 1 0 0 0-1-1ZM44 24H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h40a2 2 0 0 0 2-2V26a2 2 0 0 0-2-2ZM14 40H6v-4h8Zm0-8H6v-4h8Zm28 8H18v-4h24Zm0-8H18v-4h24Z" />
            </svg>
        );
    },
);
