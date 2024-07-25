import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const MoveUpDownIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M33.146 9.146a.5.5 0 0 1-.353.854H28v6h-8v-6h-4.793a.5.5 0 0 1-.353-.854L24 0ZM33.146 36.854a.5.5 0 0 0-.353-.854H28v-6h-8v6h-4.793a.5.5 0 0 0-.353.854L24 46Z" />
                <rect height="6" rx="1" ry="1" width="40" x="4" y="20" />
            </svg>
        );
    },
);
