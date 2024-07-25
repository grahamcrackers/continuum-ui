import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const StarburstIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="m25.062 4.739 3.2 9.012 8.639-4.106a1.111 1.111 0 0 1 1.48 1.48l-4.101 8.639 9.012 3.2a1.111 1.111 0 0 1 0 2.094l-9.012 3.2 4.107 8.639a1.111 1.111 0 0 1-1.48 1.48l-8.64-4.097-3.2 9.012a1.111 1.111 0 0 1-2.094 0l-3.2-9.012-8.639 4.107a1.111 1.111 0 0 1-1.48-1.48l4.106-8.639-9.012-3.2a1.111 1.111 0 0 1 0-2.094l9.012-3.2-4.115-8.649a1.111 1.111 0 0 1 1.48-1.48l8.639 4.106 3.2-9.012a1.111 1.111 0 0 1 2.098 0Z" />
            </svg>
        );
    },
);
