import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const PasteTextIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M22 6V4a4 4 0 0 0-8 0v2h-4v4h16V6Zm-2 0h-4V4a2 2 0 0 1 4 0Z" />
                <path d="M31 6h-3v5a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1V6H5a1 1 0 0 0-1 1v26a1 1 0 0 0 1 1h26a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1Zm-5 13.5a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5V18h-4v10h1.5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5H16V18h-4v1.473a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5V16.5a.5.5 0 0 1 .5-.5h15a.5.5 0 0 1 .5.5Z" />
            </svg>
        );
    },
);
