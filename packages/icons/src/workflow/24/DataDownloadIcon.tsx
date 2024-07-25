import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const DataDownloadIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <ellipse cx="24" cy="10.25" rx="20" ry="6.25" />
                <path d="M19.464 37.121a2.98 2.98 0 0 1 1.676-5.053C14.776 31.708 5.924 30.2 4 27.152v10.6C4 41.2 12.954 44 24 44c.779 0 1.543-.017 2.3-.044ZM44 20v-4.5c-1.977 2.5-7.172 3.851-12.267 4.5ZM26 28.186v-7.724c-.7.025-1.379.04-2 .04-6.17 0-17.765-1.461-20-5.006v6.471c0 3.451 8.954 6.25 20 6.25q1.013.001 2-.031ZM47.146 36.854a.5.5 0 0 0-.353-.854H42V24H30v12h-4.793a.5.5 0 0 0-.353.854L36 48Z" />
                <path d="M47.146 36.854a.5.5 0 0 0-.353-.854H42V24H30v12h-4.793a.5.5 0 0 0-.353.854L36 48Z" />
            </svg>
        );
    },
);
