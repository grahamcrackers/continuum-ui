import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const VideoCheckedOutIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M20 36a15.923 15.923 0 0 1 3.52-10H15a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h13.26A15.92 15.92 0 0 1 36 20a16.085 16.085 0 0 1 2 .138V17a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4.174a15.891 15.891 0 0 1 2 .984V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v36a2 2 0 0 0 2 2h16.158A15.905 15.905 0 0 1 20 36ZM38 7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1ZM10 41a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1Zm0-10a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1Zm0-10a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1Zm0-10a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1Z" />
            </svg>
        );
    },
);
