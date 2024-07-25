import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const FolderIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M44 10H27.266l-4.844-4.832A4 4 0 0 0 19.6 4H6a4 4 0 0 0-4 4v32a2 2 0 0 0 2 2h40a2 2 0 0 0 2-2V12a2 2 0 0 0-2-2ZM19.6 8l6.015 6H6V8Z" />
            </svg>
        );
    },
);
