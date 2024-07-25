import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const GraphTreeIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <rect height="18" rx=".5" ry=".5" width="18" x="2" y="8" />
                <rect height="10" rx=".5" ry=".5" width="12" x="22" y="8" />
                <rect height="6" rx=".5" ry=".5" width="8" x="22" y="20" />
                <rect height="6" rx=".5" ry=".5" width="2" x="32" y="20" />
            </svg>
        );
    },
);
