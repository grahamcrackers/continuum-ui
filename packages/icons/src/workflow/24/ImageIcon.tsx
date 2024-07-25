import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const ImageIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M44 6H4a2 2 0 0 0-2 2v32a2 2 0 0 0 2 2h40a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2Zm-2 28.534-6.954-6.954a2.639 2.639 0 0 0-3.731 0l-4.051 4.051-9.964-9.967a2.638 2.638 0 0 0-3.73 0L6 29.231V10h36Z" />
                <path d="M35.123 20.825a3.7 3.7 0 1 0-3.7-3.7 3.7 3.7 0 0 0 3.7 3.7Z" />
            </svg>
        );
    },
);
