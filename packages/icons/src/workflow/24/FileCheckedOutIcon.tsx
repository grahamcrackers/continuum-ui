import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const FileCheckedOutIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M36 24a12 12 0 1 0 12 12 12 12 0 0 0-12-12Zm6 14.48a.594.594 0 0 1-1.015.42l-2.528-2.529-5.336 5.336a1 1 0 0 1-1.414 0l-1.414-1.414a1 1 0 0 1 0-1.414l5.336-5.336-2.529-2.528A.594.594 0 0 1 33.52 30h8.126a.354.354 0 0 1 .354.354ZM26 0v10h10L26 0z" />
                <path d="M20 36a16 16 0 0 1 16-16v-6H24a2 2 0 0 1-2-2V0H6a2 2 0 0 0-2 2v36a2 2 0 0 0 2 2h14.524A15.974 15.974 0 0 1 20 36Z" />
            </svg>
        );
    },
);
