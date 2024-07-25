import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const Gauge3Icon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M4 28.044a19.738 19.738 0 0 0 1.838 8.318.994.994 0 0 0 1.6.257l1.53-1.53a.991.991 0 0 0 .207-1.079A15.656 15.656 0 0 1 10.2 20.052a16.3 16.3 0 0 1 7.528-6.694l.129-1.671a6.1 6.1 0 0 1 1.067-2.967A19.99 19.99 0 0 0 4 28.044ZM43.737 24.8A20.123 20.123 0 0 0 29.064 8.7a6.094 6.094 0 0 1 1.078 2.983l.127 1.647a15.93 15.93 0 0 1 8.555 20.68.986.986 0 0 0 .207 1.077l1.529 1.53a.994.994 0 0 0 1.6-.257 19.8 19.8 0 0 0 1.577-11.56ZM24 8.271a1.575 1.575 0 0 0-1.57 1.454l-2.123 22.287A3.7 3.7 0 0 0 24 36a3.7 3.7 0 0 0 3.693-3.988L25.57 9.725A1.575 1.575 0 0 0 24 8.271Z" />
            </svg>
        );
    },
);
