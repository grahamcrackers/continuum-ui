import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const LogOutIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="m33.749 7.759-.93 1.55a1 1 0 0 0 .314 1.339 16.2 16.2 0 1 1-18.258 0 1 1 0 0 0 .313-1.338l-.926-1.546a1.012 1.012 0 0 0-1.418-.334 20 20 0 1 0 22.315 0 1 1 0 0 0-1.41.329Z" />
                <rect height="20" rx="1" ry="1" width="4" x="22" y="2" />
            </svg>
        );
    },
);
