import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const ImagesIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M32 5a1.068 1.068 0 0 0-1.125-1H1.125A1.068 1.068 0 0 0 0 5v22a1.068 1.068 0 0 0 1.125 1H2V6h30Z" />
                <path d="M35 8H5a1 1 0 0 0-1 1v22a1 1 0 0 0 1 1h30a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1Zm-1 19.373L28.728 22.1a2 2 0 0 0-2.828 0l-3.072 3.072-7.556-7.557a2 2 0 0 0-2.828 0L6 24.059V10h28Z" />
                <circle cx="29" cy="15" r="2.5" />
            </svg>
        );
    },
);
