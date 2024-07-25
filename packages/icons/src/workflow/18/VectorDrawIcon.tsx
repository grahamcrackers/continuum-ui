import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const VectorDrawIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="m33.134 11.26-8.416-8.414a1.068 1.068 0 0 0-1.51 0l-3.717 3.716a1.052 1.052 0 0 0-.147 1.289l8.42 8.42.008-.017.186.183a1.066 1.066 0 0 0 1.509 0l3.667-3.666a1.066 1.066 0 0 0 0-1.511ZM17.462 9.383l-7.877 3.628a2 2 0 0 0-1.011 1.051L1.979 29.973a1 1 0 0 0 .216 1.09l.523.523 8.156-8.157a1.619 1.619 0 0 1-.037-.254 2 2 0 1 1 2 2 1.684 1.684 0 0 1-.276-.04l-8.147 8.148.592.592a1 1 0 0 0 1.09.217l15.913-6.6a2 2 0 0 0 1.05-1.011l3.628-7.876Z" />
            </svg>
        );
    },
);
