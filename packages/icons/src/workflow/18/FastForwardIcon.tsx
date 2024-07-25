import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const FastForwardIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M14.149 30.919V5.081a1 1 0 0 1 1.625-.781l16.149 12.919a1 1 0 0 1 0 1.562L15.774 31.7a1 1 0 0 1-1.625-.781ZM12.149 9.519 5.625 4.3A1 1 0 0 0 4 5.081v25.838a1 1 0 0 0 1.625.781l6.524-5.22Z" />
            </svg>
        );
    },
);
