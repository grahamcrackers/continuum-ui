import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const PanelIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M42 2H6a2 2 0 0 0-2 2v42h4V34h32v12h4V4a2 2 0 0 0-2-2ZM8 28V6h32v22Z" />
                <rect height="4" rx="1" ry="1" width="24" x="12" y="38" />
                <rect height="4" rx="1" ry="1" width="24" x="12" y="10" />
                <rect height="4" rx="1" ry="1" width="24" x="12" y="18" />
            </svg>
        );
    },
);
