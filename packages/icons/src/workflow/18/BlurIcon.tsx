import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const BlurIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M14.909.347C16.261 9.619 7.182 16.871 7.182 24.3c0 5.548 4.843 10.046 10.818 10.046s10.818-4.5 10.818-10.046c0-7.667-11.494-15.743-13.909-23.953Z" />
            </svg>
        );
    },
);
