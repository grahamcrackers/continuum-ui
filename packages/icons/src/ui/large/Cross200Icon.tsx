import * as React from "react";

import { iconVariants } from "../../helpers";
import type { IconProps } from "../../helpers";

export const Cross200Icon = React.forwardRef<SVGSVGElement, IconProps>(
    ({ className, size, focusable = false, hidden = true, color = "currentColor", ...props }, forwardedRef) => {
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 12 12"
                className={iconVariants({ size, className })}
                focusable={focusable}
                aria-hidden={hidden}
                {...props}
                ref={forwardedRef}
            >
                <path d="m7.611 6 3.654-3.653A1.14 1.14 0 0 0 9.653.735L6 4.39 2.347.735A1.14 1.14 0 0 0 .735 2.347L4.39 6 .735 9.653a1.14 1.14 0 1 0 1.612 1.612L6 7.61l3.653 3.654a1.14 1.14 0 0 0 1.612-1.612z" />
            </svg>
        );
    },
);
