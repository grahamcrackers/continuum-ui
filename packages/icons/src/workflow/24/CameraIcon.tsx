import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const CameraIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <circle cx="24" cy="25" r="7" />
                <path d="M44 12h-6.75a2 2 0 0 1-1.664-.891l-4.992-4.218A2 2 0 0 0 28.93 6h-9.86a2 2 0 0 0-1.664.891l-4.867 4.218a2 2 0 0 1-1.664.891H4a2 2 0 0 0-2 2v26a2 2 0 0 0 2 2h40a2 2 0 0 0 2-2V14a2 2 0 0 0-2-2ZM24 36.3A11.3 11.3 0 1 1 35.3 25 11.3 11.3 0 0 1 24 36.3Z" />
            </svg>
        );
    },
);
