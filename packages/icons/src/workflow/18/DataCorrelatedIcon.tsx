import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const DataCorrelatedIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M26 14c0-.4-.021-.8-.06-1.188A9.995 9.995 0 0 0 12.812 25.94c.391.039.787.06 1.188.06a12 12 0 0 0 12-12Z" />
                <path d="M10 22a12 12 0 0 1 15.482-11.482 12 12 0 1 0-14.964 14.964A11.989 11.989 0 0 1 10 22ZM25.482 10.518a11.907 11.907 0 0 1 .458 2.294A10 10 0 1 1 12.812 25.94a11.907 11.907 0 0 1-2.294-.458 12 12 0 1 0 14.964-14.964Z" />
            </svg>
        );
    },
);
