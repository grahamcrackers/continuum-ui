import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const BriefcaseIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M28 24v3a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1v-3H0v16a2 2 0 0 0 2 2h44a2 2 0 0 0 2-2V24ZM46 12H36V8a4 4 0 0 0-4-4H16a4 4 0 0 0-4 4v4H2a2 2 0 0 0-2 2v6h20v-1a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v1h20v-6a2 2 0 0 0-2-2ZM16 8h16v4H16Z" />
            </svg>
        );
    },
);
