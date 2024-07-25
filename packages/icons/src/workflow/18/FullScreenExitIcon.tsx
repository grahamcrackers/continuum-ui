import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const FullScreenExitIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M6 2.5V8H.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5H8V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5ZM30 8V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5V10h7.5a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5ZM0 26.5v1a.5.5 0 0 0 .5.5H6v5.5a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5V26H.5a.5.5 0 0 0-.5.5ZM30 28h5.5a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5H28v7.5a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5Z" />
                <rect height="16" rx=".5" ry=".5" width="20" x="8" y="10" />
            </svg>
        );
    },
);
