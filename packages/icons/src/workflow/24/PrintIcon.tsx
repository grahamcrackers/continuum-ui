import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const PrintIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M14 34h20v2H14zM14 30h20v2H14z" />
                <path d="M44 14h-6V6a2 2 0 0 0-2-2H12a2 2 0 0 0-2 2v8H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h2v8a2 2 0 0 0 2 2h32a2 2 0 0 0 2-2v-8h2a2 2 0 0 0 2-2V16a2 2 0 0 0-2-2ZM14 8h20v6H14Zm24 32H10V28h28Z" />
            </svg>
        );
    },
);
