import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const SummarizeIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M39 8H9a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h30a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1Zm1 15v-2a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h30a1 1 0 0 0 1-1Zm4-8v-2a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h38a1 1 0 0 0 1-1ZM26 43v-7h3.586a1 1 0 0 0 .707-1.707L24 28l-6.293 6.293A1 1 0 0 0 18.414 36H22v7a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1Z" />
            </svg>
        );
    },
);
