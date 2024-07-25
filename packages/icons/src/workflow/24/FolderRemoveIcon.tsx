import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const FolderRemoveIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M18.1 4.8a2 2 0 0 0-1.6-.8H6a2 2 0 0 0-2 2v4h18ZM20.1 36.1A15.9 15.9 0 0 1 44 22.357V16a2 2 0 0 0-2-2H4v26a2 2 0 0 0 2 2h15.231a15.858 15.858 0 0 1-1.131-5.9Z" />
                <path d="M36.1 24.2A11.9 11.9 0 1 0 48 36.1a11.9 11.9 0 0 0-11.9-11.9Zm8.132 17.2a.5.5 0 0 1 0 .707l-2.122 2.124a.5.5 0 0 1-.707 0l-5.3-5.3-5.3 5.3a.5.5 0 0 1-.707 0l-2.128-2.121a.5.5 0 0 1 0-.707l5.3-5.3-5.3-5.3a.5.5 0 0 1 0-.707l2.122-2.121a.5.5 0 0 1 .707 0l5.3 5.3 5.3-5.3a.5.5 0 0 1 .707 0l2.122 2.121a.5.5 0 0 1 0 .707l-5.3 5.3Z" />
            </svg>
        );
    },
);
