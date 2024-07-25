import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const MobileServicesIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M42 8H6a4 4 0 0 0-4 4v24a4 4 0 0 0 4 4h36a4 4 0 0 0 4-4V12a4 4 0 0 0-4-4Zm-2 28H6V12h34Zm3-9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z" />
                <path d="M9.525 32.959a1.643 1.643 0 0 1-.9-.553 1.485 1.485 0 0 1 .242-2.156l5.842-4.514a.83.83 0 0 1 1.119.114l2.924 3.319 6.644-9.216a.822.822 0 0 1 1.382.121l2.554 5.026 5.755-10.244a1.62 1.62 0 0 1 2.185-.536 1.523 1.523 0 0 1 .6 2.107l-8 13.947a.819.819 0 0 1-1.424-.056l-2.727-5.361-6.087 8.443a.821.821 0 0 1-1.27.043l-3.458-3.922-4.029 3.16a1.637 1.637 0 0 1-1.352.278Z" />
            </svg>
        );
    },
);
