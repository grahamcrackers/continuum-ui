import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const FolderOpenOutlineIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M8.69 14h24.535l-4.666 14H4Zm5.239-10H4a2 2 0 0 0-2 2v23a1 1 0 0 0 1 1h26.279a1 1 0 0 0 .949-.684l5.333-16A1 1 0 0 0 34.613 12H32V9a1 1 0 0 0-1-1l-12.332.007-3.3-3.4A2 2 0 0 0 13.929 4Z" />
            </svg>
        );
    },
);
