import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const FullScreenIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M32 24.5V30h-5.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5H34v-7.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5ZM4 30v-5.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5V32h7.5a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5ZM26 4.5v1a.5.5 0 0 0 .5.5H32v5.5a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5V4h-7.5a.5.5 0 0 0-.5.5ZM4 6h5.5a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5H2v7.5a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5Z" />
                <rect height="16" rx=".5" ry=".5" width="20" x="8" y="10" />
            </svg>
        );
    },
);
