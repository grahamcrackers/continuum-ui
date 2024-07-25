import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const DocumentRefreshIcon = React.forwardRef<SVGSVGElement, IconProps>(
    ({ className, size, focusable = false, hidden = true, color = "currentColor", ...props }, forwardedRef) => {
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="36"
                viewBox="0 0 36 36"
                className={iconVariants({ size, className })}
                focusable={focusable}
                aria-hidden={hidden}
                {...props}
                ref={forwardedRef}
            >
                <path d="M20 0h.086a1 1 0 0 1 .706.292L27.708 7.2a1 1 0 0 1 .292.714V8h-8Z" />
                <path d="M14 27a13 13 0 0 1 13-13c.338 0 .669.025 1 .05V10h-9a1 1 0 0 1-1-1V0H5a1 1 0 0 0-1 1v30a1 1 0 0 0 1 1h10a12.956 12.956 0 0 1-1-5ZM35.605 29.549a8.883 8.883 0 0 1-15.501 3.09l-1.25 1.251a.489.489 0 0 1-.35.148.5.5 0 0 1-.504-.501v-5a.5.5 0 0 1 .5-.5h4.999a.502.502 0 0 1 .501.504.489.489 0 0 1-.147.35l-1.74 1.74a6.057 6.057 0 0 0 10.597-1.436.977.977 0 0 1 .921-.62h1.25a.759.759 0 0 1 .724.974Z" />
                <path d="M18.395 24.526a8.883 8.883 0 0 1 15.501-3.091l1.25-1.25a.489.489 0 0 1 .35-.148.5.5 0 0 1 .504.5v5a.5.5 0 0 1-.5.5h-4.999a.502.502 0 0 1-.501-.504.489.489 0 0 1 .147-.35l1.74-1.74A6.057 6.057 0 0 0 21.29 24.88a.977.977 0 0 1-.921.62h-1.25a.759.759 0 0 1-.724-.974Z" />
            </svg>
        );
    },
);
