import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const PopInIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M9.8 17.716 23.819 3.7a1 1 0 0 1 1.414 0l7.067 7.067a1 1 0 0 1 0 1.414L18.284 26.2l4.945 4.945a.5.5 0 0 1-.353.854H4V13.125a.5.5 0 0 1 .854-.353Z" />
            </svg>
        );
    },
);
