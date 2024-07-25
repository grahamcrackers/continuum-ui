import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const LogOutIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <rect height="18" rx="1" ry="1" width="4" x="16" />
                <path d="m25.215 5.063-1.14 1.823a1.01 1.01 0 0 0 .337 1.384 11.738 11.738 0 1 1-12.82 0 1 1 0 0 0 .336-1.377l-1.144-1.831A1 1 0 0 0 9.4 4.731a15.9 15.9 0 1 0 17.191 0 1 1 0 0 0-1.376.332Z" />
            </svg>
        );
    },
);
