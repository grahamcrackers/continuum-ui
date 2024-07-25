import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const LocationContributionIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M4 10v28a2 2 0 0 0 2 2h36a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2Zm4 2h24v16H8Zm0 24v-4h24v4Zm32 0h-4V12h4Z" />
                <path d="m24.732 14.536-5.582 7.975-3.2-2.9a.5.5 0 0 0-.706.035l-1.121 1.238a.5.5 0 0 0 .035.706l4.792 4.339a.777.777 0 0 0 1.159-.131l6.812-9.734a.5.5 0 0 0-.123-.7l-1.368-.958a.5.5 0 0 0-.698.13Z" />
            </svg>
        );
    },
);
