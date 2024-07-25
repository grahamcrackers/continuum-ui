import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const CallCenterIcon = React.forwardRef<SVGSVGElement, IconProps>(
    ({ className, size, focusable = false, hidden = true, color = "currentColor", ...props }, forwardedRef) => {
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="36"
                viewBox="0 0 36 36"
                className={iconVariants({ size, className })}
                focusable={focusable}
                aria-hidden={hidden}
                {...props}
                ref={forwardedRef}
            >
                <path d="M31.091 14h-1.455A11.823 11.823 0 0 0 18 2 11.823 11.823 0 0 0 6.364 14H4.909A2.956 2.956 0 0 0 2 17v6a2.956 2.956 0 0 0 2.909 3h4.364V14H9.2A8.94 8.94 0 0 1 18 4.925 8.94 8.94 0 0 1 26.8 14h-.073v11.338a10.184 10.184 0 0 1-6.21 4.802A3.116 3.116 0 0 0 18 29c-1.607 0-2.909 1.007-2.909 2.25S16.393 33.5 18 33.5a2.789 2.789 0 0 0 2.86-1.87A11.682 11.682 0 0 0 28.054 26h3.036A2.956 2.956 0 0 0 34 23v-6a2.956 2.956 0 0 0-2.909-3Z" />
            </svg>
        );
    },
);
