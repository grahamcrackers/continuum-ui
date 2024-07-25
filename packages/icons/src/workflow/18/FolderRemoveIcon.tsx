import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const FolderRemoveIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M16 6H2V3.5A1.5 1.5 0 0 1 3.5 2h7.672a2 2 0 0 1 1.414.586ZM14.7 27A12.3 12.3 0 0 1 34 16.886V9a1 1 0 0 0-1-1H2v21a1 1 0 0 0 1 1h12.069a12.3 12.3 0 0 1-.369-3Z" />
                <path d="M27.1 18.2a8.9 8.9 0 1 0 8.9 8.9 8.9 8.9 0 0 0-8.9-8.9Zm5.826 12.267a.5.5 0 0 1 0 .707l-1.752 1.752a.5.5 0 0 1-.707 0L27.1 29.559l-3.367 3.367a.5.5 0 0 1-.707 0l-1.752-1.752a.5.5 0 0 1 0-.707l3.367-3.367-3.367-3.367a.5.5 0 0 1 0-.707l1.752-1.752a.5.5 0 0 1 .707 0l3.367 3.367 3.367-3.367a.5.5 0 0 1 .707 0l1.752 1.752a.5.5 0 0 1 0 .707L29.559 27.1Z" />
            </svg>
        );
    },
);
