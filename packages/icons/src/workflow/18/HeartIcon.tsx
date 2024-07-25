import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const HeartIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M24.364 6.509A8.013 8.013 0 0 0 18 10.327a8.013 8.013 0 0 0-6.364-3.818A7.636 7.636 0 0 0 4 14.145c0 7.292 14 16.546 14 16.546s14-9.156 14-16.546a7.636 7.636 0 0 0-7.636-7.636Z" />
            </svg>
        );
    },
);
