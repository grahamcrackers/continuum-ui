import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const SaveToLightIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M33 8h-7v2h6v20H4V10h6V8H3a1 1 0 0 0-1 1v22a1 1 0 0 0 1 1h30a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1Z" />
                <path d="M24.793 14H20V.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5V14h-4.793a.5.5 0 0 0-.353.854L18 22l7.146-7.146a.5.5 0 0 0-.353-.854Z" />
            </svg>
        );
    },
);
