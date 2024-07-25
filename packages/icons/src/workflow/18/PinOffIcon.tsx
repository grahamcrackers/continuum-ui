import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const PinOffIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="m11.646 21.998 2.379 2.381L3.924 34.406 0 36l1.645-3.975 10.001-10.027zM23.951 26.32h.008L24 20.289 32.293 12l2.27-.023v-.009a1.446 1.446 0 0 0 1.01-2.47L31.041 4.96 26.5.483a1.446 1.446 0 0 0-2.469 1.011h-.008L24 3.708 15.707 12l-6.025.044v.007a1.429 1.429 0 0 0-1.106.414 1.446 1.446 0 0 0 0 2.047l6.459 6.458 6.457 6.459a1.442 1.442 0 0 0 2.463-1.108Z" />
            </svg>
        );
    },
);
