import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const DevicesIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M18 22H6V6h28V4a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h16ZM3 16.5A2.5 2.5 0 1 1 5.5 14 2.5 2.5 0 0 1 3 16.5Z" />
                <path d="M34 8H22a2 2 0 0 0-2 2v24a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2Zm-7 2h2a1 1 0 0 1 0 2h-2a1 1 0 0 1 0-2Zm1 25.1a2.1 2.1 0 1 1 2.1-2.1 2.1 2.1 0 0 1-2.1 2.1Zm6-5.1H22V14h12Z" />
            </svg>
        );
    },
);
