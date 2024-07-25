import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const HealIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M32.728 3.272a6 6 0 0 0-8.485 0l-6.456 6.456L3.272 24.243a6 6 0 0 0 8.485 8.485l5.943-5.947 15.028-15.024a6 6 0 0 0 0-8.485ZM19 11a2 2 0 1 1-2 2 2 2 0 0 1 2-2Zm-6 10a2 2 0 1 1 2-2 2 2 0 0 1-2 2Zm4 4a2 2 0 1 1 2-2 2 2 0 0 1-2 2Zm6-6a2 2 0 1 1 2-2 2 2 0 0 1-2 2Z" />
            </svg>
        );
    },
);
