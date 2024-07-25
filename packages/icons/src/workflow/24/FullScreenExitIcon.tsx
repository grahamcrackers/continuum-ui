import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const FullScreenExitIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <rect height="24" rx="2" ry="2" width="28" x="10" y="12" />
                <path d="M6 2.5V8H.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5H10V2.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM42 8V2.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5V12h9.5a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5ZM0 36.5v3a.5.5 0 0 0 .5.5H6v5.5a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5V36H.5a.5.5 0 0 0-.5.5ZM42 40h5.5a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5H38v9.5a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5Z" />
            </svg>
        );
    },
);
