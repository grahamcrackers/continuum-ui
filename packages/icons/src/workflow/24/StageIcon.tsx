import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const StageIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M11.942 33.941V24a26.637 26.637 0 0 0 10-20H6.059a2 2 0 0 0-2 2v29.941h5.883a2 2 0 0 0 2-2Z" />
                <path d="M33.824 39V21.552l1.095-1.094a4.518 4.518 0 1 0-2.535-2.642L21.689 28.91a.916.916 0 0 0 0 1.295l1.295 1.3a.916.916 0 0 0 1.294 0l5.885-6.287V39H4v3a2 2 0 0 0 2 2h36a2 2 0 0 0 2-2v-3Z" />
            </svg>
        );
    },
);
