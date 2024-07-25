import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const TargetIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M24 10a14 14 0 1 1-14 14 14.015 14.015 0 0 1 14-14Zm0-6a20 20 0 1 0 20 20A20 20 0 0 0 24 4Z" />
                <circle cx="24" cy="24" r="6" />
            </svg>
        );
    },
);
