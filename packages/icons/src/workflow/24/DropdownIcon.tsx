import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const DropdownIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M42 2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h36a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2Zm-7 9.5-4.317-4.68a.5.5 0 0 1 .385-.82h7.864a.5.5 0 0 1 .385.82ZM42 18H6a2 2 0 0 0-2 2v24a2 2 0 0 0 2 2h36a2 2 0 0 0 2-2V20a2 2 0 0 0-2-2ZM8 23a1 1 0 0 1 1-1h30a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1Zm32 18a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h30a1 1 0 0 1 1 1Zm-4-8a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h26a1 1 0 0 1 1 1Z" />
            </svg>
        );
    },
);
