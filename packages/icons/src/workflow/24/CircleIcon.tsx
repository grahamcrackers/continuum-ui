import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const CircleIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M24 8.1A15.9 15.9 0 1 1 8.1 24 15.918 15.918 0 0 1 24 8.1Zm0-4A19.9 19.9 0 1 0 43.9 24 19.9 19.9 0 0 0 24 4.1Z" />
            </svg>
        );
    },
);
