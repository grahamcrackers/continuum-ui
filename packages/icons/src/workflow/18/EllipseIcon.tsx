import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const EllipseIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M18 5.931c8.883 0 16.11 5.414 16.11 12.069S26.883 30.069 18 30.069 1.89 24.655 1.89 18 9.117 5.931 18 5.931Zm0-1.781C8.114 4.15.1 10.351.1 18S8.114 31.85 18 31.85 35.9 25.649 35.9 18 27.886 4.15 18 4.15Z" />
            </svg>
        );
    },
);
