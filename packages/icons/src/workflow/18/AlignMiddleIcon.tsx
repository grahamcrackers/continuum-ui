import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const AlignMiddleIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M35.5 16H30V9a1 1 0 0 0-1-1h-8a1 1 0 0 0-1 1v7h-4V5a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v11H.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5H6v11a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V18h4v7a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-7h5.5a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5Z" />
            </svg>
        );
    },
);
