import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const AlignCenterIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M22 3v5h-6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h6v8H8a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h14v5a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-5h14a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2H26v-8h6a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2h-6V3a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1Z" />
            </svg>
        );
    },
);
