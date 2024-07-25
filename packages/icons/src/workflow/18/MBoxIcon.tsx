import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const MBoxIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M33 4H3a1 1 0 0 0-1 1v26a1 1 0 0 0 1 1h30a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1Zm-1 26H4V10h28Z" />
                <path d="M6 12h2v2H6zM6 22h2v2H6zM10 12h4v2h-4zM16 12h4v2h-4zM22 12h4v2h-4zM10 26h4v2h-4zM16 26h4v2h-4zM22 26h4v2h-4zM28 12h2v2h-2zM28 16h2v2h-2zM6 16h2v4H6zM28 20h2v4h-2zM6 26h2v2H6zM28 26h2v2h-2z" />
            </svg>
        );
    },
);
