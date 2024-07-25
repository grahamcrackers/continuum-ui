import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const AdDisplayIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M22 8h8v14h-8z" />
                <path d="M35 2H1a1 1 0 0 0-1 1v24a1 1 0 0 0 1 1h13v5a1 1 0 0 1-1 1h-2a.979.979 0 0 0-1 1v1h16v-1a1 1 0 0 0-1-1h-2a1 1 0 0 1-1-1v-5h13a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1Zm-3 22H4V6h28Z" />
            </svg>
        );
    },
);
