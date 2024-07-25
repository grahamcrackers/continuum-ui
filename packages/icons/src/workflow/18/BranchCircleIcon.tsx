import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const BranchCircleIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <circle cx="24" cy="24" r="2" />
                <circle cx="24" cy="12" r="2" />
                <path d="M18 2a16 16 0 1 0 16 16A16 16 0 0 0 18 2Zm-3.8 16a4.2 4.2 0 0 1-.069.683l6.527 2.8a4.425 4.425 0 1 1-.79 1.837l-6.528-2.8a4.2 4.2 0 1 1 0-5.04l6.528-2.8a4.219 4.219 0 1 1 .791 1.837l-6.528 2.8A4.2 4.2 0 0 1 14.2 18Z" />
            </svg>
        );
    },
);
