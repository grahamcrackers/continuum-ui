import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const FlashOnIcon = React.forwardRef<SVGSVGElement, IconProps>(
    ({ className, size, focusable = false, hidden = true, color = "currentColor", ...props }, forwardedRef) => {
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                height="48"
                viewBox="0 0 48 48"
                width="48"
                className={iconVariants({ size, className })}
                focusable={focusable}
                aria-hidden={hidden}
                {...props}
                ref={forwardedRef}
            >
                <path d="M17.387 2h16.078a1 1 0 0 1 .835 1.555L24.667 18h11.14a1 1 0 0 1 .755 1.656L12.189 47.734a.5.5 0 0 1-.846-.5L19.333 26h-9.279a1 1 0 0 1-.949-1.316l7.334-22A1 1 0 0 1 17.387 2Z" />
            </svg>
        );
    },
);
