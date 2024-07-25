import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const ColorWheelIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M32 18a13.953 13.953 0 0 0-4.114-9.9L18 18Z" opacity=".2" />
                <path d="m18 18 9.919 9.869A13.956 13.956 0 0 0 32 18Z" opacity=".33" />
                <path d="M18 18v14a13.955 13.955 0 0 0 9.874-4.087Z" opacity=".47" />
                <path d="M18 32V18l-9.9 9.889A13.96 13.96 0 0 0 18 32Z" opacity=".6" />
                <path d="M18 18H4a13.959 13.959 0 0 0 4.1 9.889Z" opacity=".7" />
                <path d="M18 18 8.09 8.122A13.953 13.953 0 0 0 4 18Z" opacity=".8" />
                <path d="M18 2a16 16 0 1 0 16 16A16 16 0 0 0 18 2Zm0 30A13.991 13.991 0 0 1 8.07 8.144L17.939 18V4H18a14 14 0 0 1 0 28Z" />
            </svg>
        );
    },
);
