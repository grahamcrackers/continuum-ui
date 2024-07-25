import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const FolderArchiveIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M14 23.828A3 3 0 0 1 12 21v-2a3 3 0 0 1 3-3h19v-5a1 1 0 0 0-1-1H2v21a1 1 0 0 0 1 1h11Z" />
                <path d="M35 22H15a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h20a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1Zm-1 2v11a1 1 0 0 1-1 1H17a1 1 0 0 1-1-1V24Zm-6 6v-1a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1ZM16 6H2V3.5A1.5 1.5 0 0 1 3.5 2h7.672a2 2 0 0 1 1.414.586Z" />
            </svg>
        );
    },
);
