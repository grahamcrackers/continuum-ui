import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const SelectionIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M4 20h2v5H4zM4 12h2v5H4zM6 30v-2H4v3.111a.889.889 0 0 0 .89.889H9v-2ZM12 30h5v2h-5zM20 30h5v2h-5zM30 11h2v5h-2zM30 19h2v5h-2zM30 27v3h-2v2h3a1 1 0 0 0 1-1v-4ZM31.112 4H27v2h3v2h2V4.889A.889.889 0 0 0 31.112 4ZM19 4h5.001v2H19zM11 4h5.001v2H11zM8 4H5a1 1 0 0 0-1 1v4h2V6h2Z" />
            </svg>
        );
    },
);
