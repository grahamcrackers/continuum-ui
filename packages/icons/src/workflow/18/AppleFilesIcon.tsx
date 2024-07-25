import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const AppleFilesIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M31.66 8H17.709a2.347 2.347 0 0 1-1.3-.393L11.59 4.393A2.343 2.343 0 0 0 10.292 4H4.34A2.34 2.34 0 0 0 2 6.34v21.32A2.34 2.34 0 0 0 4.34 30h27.32A2.34 2.34 0 0 0 34 27.66V10.34A2.34 2.34 0 0 0 31.66 8ZM4 11.5A1.5 1.5 0 0 1 5.5 10h25a1.5 1.5 0 0 1 1.5 1.5v.5H4Z" />
            </svg>
        );
    },
);
