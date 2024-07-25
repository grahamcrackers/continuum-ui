import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const ImageSearchIcon = React.forwardRef<SVGSVGElement, IconProps>(
    ({ className, size, focusable = false, hidden = true, color = "currentColor", ...props }, forwardedRef) => {
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 48 48"
                className={iconVariants({ size, className })}
                focusable={focusable}
                aria-hidden={hidden}
                {...props}
                ref={forwardedRef}
            >
                <path d="M33.123 7.425a3.7 3.7 0 1 1-3.7 3.7 3.7 3.7 0 0 1 3.7-3.7ZM21.22 21.585l-5.92-5.92a2.638 2.638 0 0 0-3.73 0L4 23.23V4h36v15.328a15.052 15.052 0 0 1 4 3.7V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v32a2 2 0 0 0 2 2h15.557a14.888 14.888 0 0 1 3.663-14.414Zm25.73 22.537a2 2 0 0 1-2.828 2.828l-5.89-5.89a11.008 11.008 0 1 1 2.828-2.828ZM32 39a7 7 0 1 0-7-7 7 7 0 0 0 7 7Z" />
            </svg>
        );
    },
);
