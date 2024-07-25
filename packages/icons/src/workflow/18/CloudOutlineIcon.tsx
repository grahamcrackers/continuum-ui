import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const CloudOutlineIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M20.5 6.714a6.788 6.788 0 0 1 6.538 8.606 5.492 5.492 0 0 1 .605-.034 5.357 5.357 0 0 1 0 10.714H6.214a3.215 3.215 0 0 1 0-6.429h.359v-1.428a5.718 5.718 0 0 1 7.2-5.519 6.788 6.788 0 0 1 6.727-5.91Zm0-2a8.811 8.811 0 0 0-8.233 5.715 7.724 7.724 0 0 0-7.69 7.406A5.214 5.214 0 0 0 6.214 28h21.429a7.357 7.357 0 0 0 1.643-14.529A8.8 8.8 0 0 0 20.5 4.714Z" />
            </svg>
        );
    },
);
