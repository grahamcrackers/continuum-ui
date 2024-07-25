import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const GraphHistogramIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M33.5 30h-3a.5.5 0 0 0-.5.5v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v-6a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v-8a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5V6.519A.519.519 0 0 0 17.481 6h-2.962a.519.519 0 0 0-.519.519V10.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v10a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v8a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5V34h32v-3.5a.5.5 0 0 0-.5-.5Z" />
            </svg>
        );
    },
);
