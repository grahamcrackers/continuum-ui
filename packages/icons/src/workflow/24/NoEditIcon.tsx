import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const NoEditIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <rect
                    height="56.215"
                    rx="1"
                    ry="1"
                    transform="rotate(-45 23.875 23.875)"
                    width="4"
                    x="21.876"
                    y="-4.233"
                />
                <path d="M33.146 24.738 43.59 14.273a1.886 1.886 0 0 0 .173-2.653l-7.42-7.382a1.889 1.889 0 0 0-2.649.18L23.26 14.852ZM14.853 23.259 8.82 29.292a2.225 2.225 0 0 0-.521.814L4.116 41.658a1.654 1.654 0 0 0 2.171 2.186L17.9 39.712a2.223 2.223 0 0 0 .826-.526l6.022-6.033ZM7.4 40.62l3.455-9.654 6.2 6.179c-3.1 1.116-6.975 2.516-9.655 3.475Z" />
            </svg>
        );
    },
);
