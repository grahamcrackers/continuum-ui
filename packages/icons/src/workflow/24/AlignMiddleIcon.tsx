import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const AlignMiddleIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M45 22h-5v-6a2 2 0 0 0-2-2h-8a2 2 0 0 0-2 2v6h-8V8a2 2 0 0 0-2-2h-8a2 2 0 0 0-2 2v14H3a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h5v14a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V26h8v6a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-6h5a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1Z" />
            </svg>
        );
    },
);
