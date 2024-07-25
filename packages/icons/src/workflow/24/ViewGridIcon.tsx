import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const ViewGridIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M14 6H6a2 2 0 0 0-2 2v8h10ZM18 6h10v10H18zM18 34h10v10H18zM18 20h10v10H18zM32 6v10h10V8a2 2 0 0 0-2-2ZM4 20h10v10H4zM32 44h8a2 2 0 0 0 2-2v-8H32ZM32 20h10v10H32zM14 34H4v8a2 2 0 0 0 2 2h8Z" />
            </svg>
        );
    },
);
