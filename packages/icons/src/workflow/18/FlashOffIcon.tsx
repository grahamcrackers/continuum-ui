import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const FlashOffIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M13.823 20.473 8 36h.9l9.493-10.935-4.57-4.592zM18.26 13.609 26 2H12l-1.286 4.026 7.546 7.583zM23.643 19.019 28 14h-9.351l4.994 5.019zM7.976 14.598 6.25 20h7.102l-5.376-5.402z" />
                <rect
                    height="43.854"
                    rx=".818"
                    ry=".818"
                    transform="rotate(-45 18 19)"
                    width="2.455"
                    x="16.773"
                    y="-2.926"
                />
            </svg>
        );
    },
);
