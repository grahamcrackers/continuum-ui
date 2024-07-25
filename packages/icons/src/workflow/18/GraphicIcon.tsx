import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const GraphicIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M33 14h-9V1.385a.482.482 0 0 0-.481-.5H23.5a.494.494 0 0 0-.35.147L1.091 23.146a.5.5 0 0 0 .354.854h8.838A7.909 7.909 0 0 0 10 26a7.976 7.976 0 0 0 14.89 4H33a1 1 0 0 0 1-1V15a1 1 0 0 0-1-1ZM4.828 22 22 4.828V14h-3a1 1 0 0 0-1 1v3a7.967 7.967 0 0 0-6.891 4ZM18 32a6 6 0 1 1 6-6 6.007 6.007 0 0 1-6 6Z" />
            </svg>
        );
    },
);
