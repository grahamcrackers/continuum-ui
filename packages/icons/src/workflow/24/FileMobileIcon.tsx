import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const FileMobileIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M16 4v12H4L16 4zM42 14H30a2 2 0 0 0-2 2v26a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V16a2 2 0 0 0-2-2Zm-7 2h2a1 1 0 0 1 0 2h-2a1 1 0 0 1 0-2Zm1 27.1a2.1 2.1 0 1 1 2.1-2.1 2.1 2.1 0 0 1-2.1 2.1Zm6-5.1H30V20h12Z" />
                <path d="M24 42V16a6.007 6.007 0 0 1 6-6h6V6a2 2 0 0 0-2-2H20v14a2 2 0 0 1-2 2H4v22a2 2 0 0 0 2 2h18.369A5.919 5.919 0 0 1 24 42Z" />
            </svg>
        );
    },
);
