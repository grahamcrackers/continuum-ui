import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const CropIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M44 32H16V4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v6H4a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h6v20a2 2 0 0 0 2 2h20v6a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-6h6a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2Z" />
                <path d="M32 28h6V12a2 2 0 0 0-2-2H20v6h12Z" />
            </svg>
        );
    },
);
