import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const ThumbDownIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <rect height="18" rx="1" ry="1" width="6" x="2" y="6" />
                <path d="M31.077 21.89H21.11a63.859 63.859 0 0 1 .89 9.19c0 1.661-1.032 2.92-2 2.92a1.839 1.839 0 0 1-2-2 11.326 11.326 0 0 0-2.516-6.258A46.35 46.35 0 0 0 10 20.958V6s2.809.033 14 0a3.946 3.946 0 0 1 3.677 2.424l5.128 10.788a1.862 1.862 0 0 1-1.728 2.678Z" />
            </svg>
        );
    },
);
