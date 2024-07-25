import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const Branch3Icon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M18 38a7.948 7.948 0 0 0-2.954-6.161l7.531-13.982a7.121 7.121 0 0 0 2.846 0l7.53 13.983a8.116 8.116 0 1 0 3.623-1.7l-7.53-13.983a8 8 0 1 0-10.093 0l-7.531 13.987A7.991 7.991 0 1 0 18 38Zm24.2 0a4.2 4.2 0 1 1-4.2-4.2 4.2 4.2 0 0 1 4.2 4.2ZM5.8 38a4.2 4.2 0 1 1 4.2 4.2A4.2 4.2 0 0 1 5.8 38Z" />
            </svg>
        );
    },
);
