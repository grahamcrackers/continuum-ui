import * as React from "react";

import { iconVariants } from "../../helpers";
import type { IconProps } from "../../helpers";

export const CornerTriangle100Icon = React.forwardRef<SVGSVGElement, IconProps>(
    ({ className, size, focusable = false, hidden = true, color = "currentColor", ...props }, forwardedRef) => {
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 7 7"
                className={iconVariants({ size, className })}
                focusable={focusable}
                aria-hidden={hidden}
                {...props}
                ref={forwardedRef}
            >
                <path d="M6.687.75a.3.3 0 0 0-.221.091L.842 6.466a.312.312 0 0 0 .221.533h5.624a.31.31 0 0 0 .312-.312V1.062A.31.31 0 0 0 6.687.75" />
            </svg>
        );
    },
);
