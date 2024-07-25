import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const FileMobileIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M10 2v10H0L10 2zM33 8H19a1 1 0 0 0-1 1v24a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1Zm-8 2h2a1 1 0 0 1 0 2h-2a1 1 0 0 1 0-2Zm1 23.1a2.1 2.1 0 1 1 2.1-2.1 2.1 2.1 0 0 1-2.1 2.1Zm6-5.1H20V14h12Z" />
                <path d="M16 32V8.481A2.481 2.481 0 0 1 18.481 6H26V3a1 1 0 0 0-1-1H12v11a1 1 0 0 1-1 1H0v19a1 1 0 0 0 1 1h15.557A3.953 3.953 0 0 1 16 32Z" />
            </svg>
        );
    },
);
