import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const DevicesIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M22 32H6V8h32v2h4V8a4 4 0 0 0-4-4H4a4 4 0 0 0-4 4v24a4 4 0 0 0 4 4h18ZM3 22.5a2.5 2.5 0 0 1 0-5 2.5 2.5 0 1 1 0 5Z" />
                <path d="M44 14H28a2 2 0 0 0-2 2v30a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V16a2 2 0 0 0-2-2Zm-9 2h2a1 1 0 0 1 0 2h-2a1 1 0 0 1 0-2Zm1 31.1a2.1 2.1 0 1 1 2.1-2.1 2.1 2.1 0 0 1-2.1 2.1Zm8-5.1H28V20h16Z" />
            </svg>
        );
    },
);
