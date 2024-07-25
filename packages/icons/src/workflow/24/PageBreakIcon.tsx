import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const PageBreakIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M28 18v12h12L28 18z" />
                <path d="M40 46V34H26a2 2 0 0 1-2-2V18H10a2 2 0 0 0-2 2v26ZM8 2v10a2 2 0 0 0 2 2h28a2 2 0 0 0 2-2V2Z" />
            </svg>
        );
    },
);
