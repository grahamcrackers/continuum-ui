import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const TreeExpandIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M4 5v26a1 1 0 0 0 1 1h26a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1Zm21.5 15H20v5.5a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V20h-5.5a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 .5-.5H16v-5.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5V16h5.5a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5Z" />
            </svg>
        );
    },
);
