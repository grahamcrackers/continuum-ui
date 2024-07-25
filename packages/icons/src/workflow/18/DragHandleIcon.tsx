import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const DragHandleIcon = React.forwardRef<SVGSVGElement, IconProps>(
    ({ className, size, focusable = false, hidden = true, color = "currentColor", ...props }, forwardedRef) => {
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="36"
                viewBox="0 0 36 36"
                className={iconVariants({ size, className })}
                focusable={focusable}
                aria-hidden={hidden}
                {...props}
                ref={forwardedRef}
            >
                <circle cx="14" cy="26" r="2" />
                <circle cx="14" cy="20" r="2" />
                <circle cx="14" cy="14" r="2" />
                <circle cx="14" cy="8" r="2" />
                <circle cx="20" cy="26" r="2" />
                <circle cx="20" cy="20" r="2" />
                <circle cx="20" cy="14" r="2" />
                <circle cx="20" cy="8" r="2" />
            </svg>
        );
    },
);
