import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const NewsAddIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M30 12h10v4H30zM16 12h10v12H16zM24.1 36A11.9 11.9 0 1 0 36 24.1 11.9 11.9 0 0 0 24.1 36Zm13.4-8a.5.5 0 0 1 .5.5V34h5.5a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5H38v5.5a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V38h-5.5a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 .5-.5H34v-5.5a.5.5 0 0 1 .5-.5ZM22.158 28H16v4h4.524a15.87 15.87 0 0 1 1.634-4Z" />
                <path d="M20 36h-8V8h32v14.158a16.046 16.046 0 0 1 4 3.283V5a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v29a2 2 0 0 1-4 0V9a1 1 0 0 0-1-1H1a1 1 0 0 0-1 1v25a6 6 0 0 0 6 6h14.524A15.986 15.986 0 0 1 20 36Z" />
            </svg>
        );
    },
);
