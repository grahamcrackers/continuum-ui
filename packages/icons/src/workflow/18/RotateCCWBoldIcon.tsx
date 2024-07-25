import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const RotateCCWBoldIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M18 2A16.03 16.03 0 0 0 4.644 9.228L1 7.521a.69.69 0 0 0-.531-.027.7.7 0 0 0-.424.9L3.053 16.7a.5.5 0 0 0 .589.276l8.311-3.008a.7.7 0 0 0 .42-.9.686.686 0 0 0-.361-.39l-3.677-1.72a11.971 11.971 0 1 1-.161 13.917 2 2 0 0 0-3.274 2.3A16 16 0 1 0 18 2Z" />
            </svg>
        );
    },
);
