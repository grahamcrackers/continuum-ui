import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const DistributeSpaceHorizIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <rect height="24" rx="1" ry="1" width="10" x="4" y="10" />
                <rect height="16" rx="1" ry="1" width="12" x="20" y="12" />
                <path d="M20 7.5a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5V4h3.5a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5H22V.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5V2h-6V.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5V2H8.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5H12v3.5a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5V4h6Z" />
            </svg>
        );
    },
);
