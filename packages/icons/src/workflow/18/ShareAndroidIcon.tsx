import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const ShareAndroidIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M27.464 24.227a4.459 4.459 0 0 0-3.157 1.3l-11.336-6.333a4.374 4.374 0 0 0 0-2.373l11.336-6.368a4.512 4.512 0 1 0-1.143-1.945l-11.319 6.359a4.473 4.473 0 1 0 0 6.282l11.319 6.327a4.472 4.472 0 1 0 4.3-3.249Z" />
            </svg>
        );
    },
);
