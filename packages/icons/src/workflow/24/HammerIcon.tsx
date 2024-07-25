import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const HammerIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M15.1 5.381 8.125 12.36a2 2 0 0 0 .005 2.834l.472.453-2.074 2.161a1.331 1.331 0 0 0-1.913-.056l-2.129 2.13a1 1 0 0 0 0 1.414L8.13 26.94a1 1 0 0 0 1.415 0l2.129-2.129c.781-.781-.032-1.889-.032-1.889l2.186-2.108a2 2 0 0 0 2.811-.018l1.189-1.19L41 42.78a2 2 0 0 0 2.828 0l1.881-1.88a2 2 0 0 0 0-2.828L22.534 14.9l.776-.776a2 2 0 0 0 0-2.828l-.939-.939s2.763-3.1 3.343-3.682c2.441-2.441 7.846-.867 8.1-2.117S21.81-1.325 15.1 5.381Z" />
            </svg>
        );
    },
);
