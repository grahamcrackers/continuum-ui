import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const LinkPageIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M23 24h24a1 1 0 0 1 1 1v22a1 1 0 0 1-1 1H23a1 1 0 0 1-1-1V25a1 1 0 0 1 1-1Zm21 6H26v14h18ZM26.991 12c.8-.8 2.732-2.668 3.064-3A6.326 6.326 0 1 1 39 17.945L36.947 20h6.472A11.049 11.049 0 0 0 26.7 5.643c-.594.594-3.806 3.741-5.483 5.418a12.819 12.819 0 0 1 5.774.939Z" />
                <path d="m18 38.946-.055.054A6.326 6.326 0 0 1 9 30.055l8.214-8.214A7.068 7.068 0 0 1 23.508 20h7.45a10.346 10.346 0 0 0-1.271-1.588 11.281 11.281 0 0 0-15.829.073L5.643 26.7A11.052 11.052 0 0 0 18 44.6Z" />
            </svg>
        );
    },
);
