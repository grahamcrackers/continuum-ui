import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const SelectSubtractIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M30 14v-2h2v3.111a.889.889 0 0 1-.889.889H28v-2ZM14 30v-2h2v3.111a.889.889 0 0 1-.889.889H12v-2ZM4 20h2v5H4zM4 12h2v5H4zM6 30v-2H4v3.111a.889.889 0 0 0 .889.889H9v-2ZM31.111 4H27v2h3v3h2V4.888A.888.888 0 0 0 31.111 4ZM19 4h5.001v2H19zM11 4h5.001v2H11zM8 4H5a1 1 0 0 0-1 1v4h2V6h2ZM14 21h2v4h-2zM21 14h4.001v2H21zM18 14h-3a1 1 0 0 0-1 1v3h2v-2h2Z" />
            </svg>
        );
    },
);
