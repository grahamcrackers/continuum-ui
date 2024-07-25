import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const ImageCheckedOutIcon = React.forwardRef<SVGSVGElement, IconProps>(
    ({ className, size, focusable = false, hidden = true, color = "currentColor", ...props }, forwardedRef) => {
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 48 48"
                className={iconVariants({ size, className })}
                focusable={focusable}
                aria-hidden={hidden}
                {...props}
                ref={forwardedRef}
            >
                <path d="M36 24a12 12 0 1 0 12 12 12 12 0 0 0-12-12Zm6 14.48a.594.594 0 0 1-1.015.42l-2.528-2.529-5.336 5.336a1 1 0 0 1-1.414 0l-1.414-1.414a1 1 0 0 1 0-1.414l5.336-5.336-2.529-2.528A.594.594 0 0 1 33.52 30h8.126a.354.354 0 0 1 .354.354Z" />
                <path d="m25.542 23.909-8.245-8.245a2.638 2.638 0 0 0-3.73 0L6 23.231V4h36v17.174a15.97 15.97 0 0 1 4 2.347V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v32a2 2 0 0 0 2 2h16a15.95 15.95 0 0 1 5.542-12.091Z" />
                <path d="M35.123 7.424a3.7 3.7 0 1 0 3.7 3.7 3.7 3.7 0 0 0-3.7-3.7Z" />
            </svg>
        );
    },
);
