import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const FileCampaignIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M28 4v12h12L28 4z" />
                <path d="M26 39a13 13 0 0 1 13-13c.338 0 .669.025 1 .051V20H26a2 2 0 0 1-2-2V4H10a2 2 0 0 0-2 2v36a2 2 0 0 0 2 2h17a12.949 12.949 0 0 1-1-5Z" />
                <path d="M36.5 39a2.5 2.5 0 1 1 2.5 2.5 2.5 2.5 0 0 1-2.5-2.5Zm8.4-1H48a9.144 9.144 0 0 0-8-8v3.1a5.98 5.98 0 0 1 4.9 4.9ZM30 38h3.1a5.98 5.98 0 0 1 4.9-4.9V30a9.144 9.144 0 0 0-8 8Zm10 6.9V48a9.144 9.144 0 0 0 8-8h-3.1a5.98 5.98 0 0 1-4.9 4.9ZM33.1 40H30a9.144 9.144 0 0 0 8 8v-3.1a5.98 5.98 0 0 1-4.9-4.9Z" />
            </svg>
        );
    },
);
