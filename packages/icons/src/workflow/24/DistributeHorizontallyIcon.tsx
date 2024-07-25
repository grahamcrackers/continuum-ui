import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const DistributeHorizontallyIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <rect height="44" rx="1" ry="1" width="4" x="8" y="2" />
                <rect height="44" rx="1" ry="1" width="4" x="36" y="2" />
                <rect height="28" rx="2" ry="2" width="12" x="18" y="10" />
            </svg>
        );
    },
);
