import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const ShipIcon = React.forwardRef<SVGSVGElement, IconProps>(
    ({ className, size, focusable = false, hidden = true, color = "currentColor", ...props }, forwardedRef) => {
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="36"
                viewBox="0 0 36 36"
                className={iconVariants({ size, className })}
                focusable={focusable}
                aria-hidden={hidden}
                {...props}
                ref={forwardedRef}
            >
                <path d="m32 18-.047-13.004a1 1 0 0 0-1-.996H22V1a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v3H5a1 1 0 0 0-1 1v13l13.973-2.994ZM8 8h20v2H8ZM35.217 21.826 18 18l2 18h9.044a.989.989 0 0 0 1-.848C30.585 30.106 36 30.962 36 26v-3.198a1 1 0 0 0-.783-.976ZM0 22.802V26c0 4.962 5.415 4.106 5.956 9.152a.989.989 0 0 0 1 .848H18V18L.783 21.826a1 1 0 0 0-.783.976Z" />
            </svg>
        );
    },
);
