import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const CheckmarkIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="m31.312 7.725-1.455-1.133a1 1 0 0 0-1.4.175L14.822 24.283l-6.647-6.612a1 1 0 0 0-1.414 0L5.436 19a1 1 0 0 0 0 1.414l8.926 8.9a1 1 0 0 0 1.5-.093L31.487 9.128a1 1 0 0 0-.175-1.403Z" />
            </svg>
        );
    },
);
