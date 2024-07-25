import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const GraphPieIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M4 24a20 20 0 0 0 16.86 19.753 1 1 0 0 0 1.14-1V25.591a1 1 0 0 0-.439-.828l-14.2-9.624a1 1 0 0 0-1.462.378A19.837 19.837 0 0 0 4 24Zm5.619-12.165 10.82 7.335A1 1 0 0 0 22 18.342V5.251a1.008 1.008 0 0 0-1.143-1A19.934 19.934 0 0 0 9.43 10.33a1 1 0 0 0 .189 1.505ZM27.14 4.247a1 1 0 0 0-1.14 1v17.692l.051.035-.051.076v19.7a1 1 0 0 0 1.14 1 20 20 0 0 0 0-39.505Z" />
            </svg>
        );
    },
);
