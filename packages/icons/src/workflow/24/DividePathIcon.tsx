import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const DividePathIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M14 12h18V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v24a2 2 0 0 0 2 2h6V14a2 2 0 0 1 2-2Z" />
                <path d="M32 16H18a2 2 0 0 0-2 2v14h14a2 2 0 0 0 2-2Z" />
                <path d="M42 16h-6v18a2 2 0 0 1-2 2H16v6a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V18a2 2 0 0 0-2-2Z" />
            </svg>
        );
    },
);
