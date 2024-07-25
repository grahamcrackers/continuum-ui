import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const AlignCenterIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M29 20H18v-4h7a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1h-7V.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5V6H9a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h7v4H5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h11v5.5a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5V30h11a1 1 0 0 0 1-1v-8a1 1 0 0 0-1-1Z" />
            </svg>
        );
    },
);
