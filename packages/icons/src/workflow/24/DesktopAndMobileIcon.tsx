import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const DesktopAndMobileIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M24 28H4V8h34v2h4V6a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v24a2 2 0 0 0 2 2h14v4a2.006 2.006 0 0 1-2 2h-3a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h13Z" />
                <path d="M46 14H30a2 2 0 0 0-2 2v30a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V16a2 2 0 0 0-2-2Zm-9 2h2a1 1 0 0 1 0 2h-2a1 1 0 0 1 0-2Zm1 31.1a2.1 2.1 0 1 1 2.1-2.1 2.1 2.1 0 0 1-2.1 2.1Zm8-5.1H30V20h16Z" />
            </svg>
        );
    },
);
