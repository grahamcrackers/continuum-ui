import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const NewItemIcon = React.forwardRef<SVGSVGElement, IconProps>(
    ({ className, size, focusable = false, hidden = true, color = "currentColor", ...props }, forwardedRef) => {
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 48 48"
                className={iconVariants({ size, className })}
                focusable={focusable}
                aria-hidden={hidden}
                {...props}
                ref={forwardedRef}
            >
                <g>
                    <path d="M43 4H5a1 1 0 0 0-1 1v38a1 1 0 0 0 1 1h38a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1Zm-3 36H8V8h32Z" />
                    <path d="M34 25a1 1 0 0 1-1 1h-7v7a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-7h-7a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h7v-7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7h7a1 1 0 0 1 1 1Z" />
                </g>
            </svg>
        );
    },
);
