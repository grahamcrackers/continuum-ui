import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const ShareIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M33 10h-6a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h3v16H6V14h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v22a1 1 0 0 0 1 1h30a1 1 0 0 0 1-1V11a1 1 0 0 0-1-1Z" />
                <path d="M10.8 8H16v11a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V8h5.2a.8.8 0 0 0 .8-.8.787.787 0 0 0-.2-.527L18.351.144a.5.5 0 0 0-.7 0L10.2 6.668a.787.787 0 0 0-.2.532.8.8 0 0 0 .8.8Z" />
            </svg>
        );
    },
);
