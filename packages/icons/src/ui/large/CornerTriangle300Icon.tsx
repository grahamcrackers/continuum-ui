import * as React from "react";

import { iconVariants } from "../../helpers";
import type { IconProps } from "../../helpers";

export const CornerTriangle300Icon = React.forwardRef<SVGSVGElement, IconProps>(
    ({ className, size, focusable = false, hidden = true, color = "currentColor", ...props }, forwardedRef) => {
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 8 8"
                className={iconVariants({ size, className })}
                focusable={focusable}
                aria-hidden={hidden}
                {...props}
                ref={forwardedRef}
            >
                <path d="M7.605.09a.4.4 0 0 0-.28.116L.206 7.325A.4.4 0 0 0 .49 8h7.115a.4.4 0 0 0 .4-.4V.49a.4.4 0 0 0-.4-.4" />
            </svg>
        );
    },
);
