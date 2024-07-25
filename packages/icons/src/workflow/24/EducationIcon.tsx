import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const EducationIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M23.105 32.025a2.006 2.006 0 0 0 1.79 0L40 24.472V30c0 4.418-7.163 10-16 10a20.292 20.292 0 0 1-12-3.845v-9.683Z" />
                <path d="m4 18-2.211-1.106a1 1 0 0 1 0-1.788L23.106 4.447a2 2 0 0 1 1.788 0l21.317 10.659a1 1 0 0 1 0 1.788L24.89 27.555a2 2 0 0 1-1.782 0L12.315 22.21l9.29-4.82A4.879 4.879 0 0 0 24 18c2.209 0 4-1.343 4-3s-1.791-3-4-3a4.1 4.1 0 0 0-3.739 1.963L8 20v15.02a29.99 29.99 0 0 0 .586 5.9l1.374 4.69A2 2 0 0 1 8 48H4a2 2 0 0 1-1.958-2.409l1.39-4.716A30.006 30.006 0 0 0 4 35.07Z" />
            </svg>
        );
    },
);
