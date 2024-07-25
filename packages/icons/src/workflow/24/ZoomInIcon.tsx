import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const ZoomInIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M27 18h-5v-5a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v5h-5a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h5v5a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-5h5a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1Z" />
                <path d="M43.338 40.3 32.719 29.679a16.043 16.043 0 1 0-3.04 3.04L40.3 43.338a2.155 2.155 0 0 0 3.04-3.04ZM20 32a12 12 0 1 1 12-12 12 12 0 0 1-12 12Z" />
            </svg>
        );
    },
);
