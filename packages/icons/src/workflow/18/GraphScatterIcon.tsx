import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const GraphScatterIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <circle cx="18" cy="16" r="2.2" />
                <circle cx="16" cy="8" r="2.2" />
                <circle cx="30" cy="6" r="2.2" />
                <circle cx="20" cy="20" r="2.2" />
                <circle cx="26" cy="16" r="2.2" />
                <circle cx="12" cy="20" r="2.2" />
                <circle cx="12" cy="10" r="2.2" />
                <circle cx="16" cy="28" r="2.2" />
                <circle cx="6" cy="30" r="2.2" />
            </svg>
        );
    },
);
