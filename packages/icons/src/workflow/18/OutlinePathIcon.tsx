import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const OutlinePathIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M10.5 22H6V6h16v4.5h2V5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v18a1 1 0 0 0 1 1h5.5ZM31 12h-5.5v2H30v16H14v-4.5h-2V31a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V13a1 1 0 0 0-1-1Z" />
                <path d="M22 15.5V22h-6.5v2H23a1 1 0 0 0 1-1v-7.5ZM20.5 12H13a1 1 0 0 0-1 1v7.5h2V14h6.5Z" />
            </svg>
        );
    },
);
