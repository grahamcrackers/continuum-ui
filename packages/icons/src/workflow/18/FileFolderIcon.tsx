import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const FileFolderIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M20 2v10h10L20 2z" />
                <path d="M18 33.5V23a3 3 0 0 1 3-3h4.586a2.982 2.982 0 0 1 2.121.879L30 23.172V14H19a1 1 0 0 1-1-1V2H7a1 1 0 0 0-1 1v30a1 1 0 0 0 1 1h11.1a2.385 2.385 0 0 1-.1-.5Z" />
                <path d="M33.5 34h-13a.5.5 0 0 1-.5-.5V26h13.5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5ZM28 24l-1.707-1.707a1 1 0 0 0-.707-.293H21a1 1 0 0 0-1 1v1Z" />
            </svg>
        );
    },
);
