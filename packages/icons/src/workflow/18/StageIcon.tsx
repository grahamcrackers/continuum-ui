import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const StageIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M8 27v-9a21.309 21.309 0 0 0 8-16H3a1 1 0 0 0-1 1v25h5a1 1 0 0 0 1-1Z" />
                <path d="M25.637 30V16.042l.875-.875a3.617 3.617 0 1 0-2.027-2.113l-8.556 8.875a.732.732 0 0 0 0 1.036L16.965 24A.732.732 0 0 0 18 24l4.707-5.029V30H2v3a1 1 0 0 0 1 1h30a1 1 0 0 0 1-1v-3Z" />
            </svg>
        );
    },
);
