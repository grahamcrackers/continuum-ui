import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const ImageMapRectangleIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M43 16a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H33a1 1 0 0 0-1 1v3H16V5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h3v16H5a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-3h16v3a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V33a1 1 0 0 0-1-1h-3V16ZM8 8h4v4H8Zm4 32H8v-4h4Zm20-7v3H16v-3a1 1 0 0 0-1-1h-3V16h3a1 1 0 0 0 1-1v-3h16v3a1 1 0 0 0 1 1h3v16h-3a1 1 0 0 0-1 1Zm8 7h-4v-4h4Zm-4-28V8h4v4Z" />
            </svg>
        );
    },
);
