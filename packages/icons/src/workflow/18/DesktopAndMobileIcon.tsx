import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const DesktopAndMobileIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M11 30H9a.979.979 0 0 0-1 1v1h10V22H4V4h24v2h4V1a1 1 0 0 0-1-1H1a1 1 0 0 0-1 1v24a1 1 0 0 0 1 1h11v3a1 1 0 0 1-1 1Z" />
                <path d="M34 8H22a2 2 0 0 0-2 2v24a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2Zm-7 2h2a1 1 0 0 1 0 2h-2a1 1 0 0 1 0-2Zm1 25.1a2.1 2.1 0 1 1 2.1-2.1 2.1 2.1 0 0 1-2.1 2.1Zm6-5.1H22V14h12Z" />
            </svg>
        );
    },
);
