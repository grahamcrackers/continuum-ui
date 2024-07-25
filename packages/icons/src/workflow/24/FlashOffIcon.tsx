import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const FlashOffIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="m31.992 24.921 4.57-5.265A1 1 0 0 0 35.807 18H25.07ZM24.828 17.758 34.3 3.555A1 1 0 0 0 33.465 2H17.387a1 1 0 0 0-.948.684L14.768 7.7ZM19.223 26.293l-7.88 20.937a.5.5 0 0 0 .846.5l13.232-15.239ZM11.232 18.3l-2.127 6.384A1 1 0 0 0 10.054 26h8.876Z" />
                <rect
                    height="56.215"
                    rx="1"
                    ry="1"
                    transform="rotate(-45 23.875 23.875)"
                    width="4"
                    x="21.875"
                    y="-4.232"
                />
            </svg>
        );
    },
);
