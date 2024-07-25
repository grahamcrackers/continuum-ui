import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const DistributeHorizontalCenterIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M38 14h-2V3a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v11h-2a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h2v11a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V34h2a2 2 0 0 0 2-2V16a2 2 0 0 0-2-2ZM18 8h-2V3a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v5h-2a2 2 0 0 0-2 2v28a2 2 0 0 0 2 2h2v5a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-5h2a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2Z" />
            </svg>
        );
    },
);
