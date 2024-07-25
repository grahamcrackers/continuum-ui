import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const FolderArchiveIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M18.1 4.8a2 2 0 0 0-1.6-.8H6a2 2 0 0 0-2 2v4h18ZM24 37a5 5 0 0 1-2-4v-2a5 5 0 0 1 5-5h17V16a2 2 0 0 0-2-2H4v26a2 2 0 0 0 2 2h18Z" />
                <path d="M47 34H27a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h20a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1Zm-1 2v11a1 1 0 0 1-1 1H29a1 1 0 0 1-1-1V36Zm-6 6v-1a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1Z" />
            </svg>
        );
    },
);
