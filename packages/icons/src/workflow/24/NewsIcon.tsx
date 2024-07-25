import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const NewsIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M46 4H10a2 2 0 0 0-2 2v27.892a2.076 2.076 0 0 1-1.664 2.081A2 2 0 0 1 4 34V9a1 1 0 0 0-1-1H1a1 1 0 0 0-1 1v25a6 6 0 0 0 6 6h36a6 6 0 0 0 6-6V6a2 2 0 0 0-2-2Zm-4 32H12V8h32v26a2 2 0 0 1-2 2Z" />
                <path d="M30 28h10v4H30zM30 20h10v4H30zM30 12h10v4H30zM16 12h10v12H16zM16 28h10v4H16z" />
            </svg>
        );
    },
);
