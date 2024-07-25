import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const PanelIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <rect height="3" rx="1" ry="1" width="16" x="10" y="30" />
                <rect height="3" rx="1" ry="1" width="16" x="10" y="8" />
                <rect height="3" rx="1" ry="1" width="16" x="10" y="14" />
                <path d="M30.5 2h-25A1.5 1.5 0 0 0 4 3.5V34h2v-8h24v8h2V3.5A1.5 1.5 0 0 0 30.5 2ZM30 22H6V4h24Z" />
            </svg>
        );
    },
);
