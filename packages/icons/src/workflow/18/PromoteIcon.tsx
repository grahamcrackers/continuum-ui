import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const PromoteIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M6 6a6 6 0 0 0 0 12h6V6ZM13.079 34h-2.908a1.5 1.5 0 0 1-1.455-1.136L6 20h6l2.534 12.136A1.5 1.5 0 0 1 13.079 34ZM32.5 23.957S25.974 18 17.425 18H14V6h3.425C25.845 6 32.5.043 32.5.043A1.268 1.268 0 0 1 34 1.426v21.148a1.268 1.268 0 0 1-1.5 1.383Z" />
            </svg>
        );
    },
);
