import * as React from "react";

import { iconVariants } from "../../helpers";
import type { IconProps } from "../../helpers";

export const Arrow200Icon = React.forwardRef<SVGSVGElement, IconProps>(
    ({ className, size, focusable = false, hidden = true, color = "currentColor", ...props }, forwardedRef) => {
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                className={iconVariants({ size, className })}
                focusable={focusable}
                aria-hidden={hidden}
                {...props}
                ref={forwardedRef}
            >
                <path d="m14.606 7.194-4.458-4.459a1.14 1.14 0 1 0-1.612 1.612L11.05 6.86H2.108a1.14 1.14 0 0 0 0 2.28h8.942l-2.514 2.513a1.14 1.14 0 1 0 1.611 1.612l4.46-4.46a1.14 1.14 0 0 0 0-1.61z" />
            </svg>
        );
    },
);
