import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const MailboxIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M5 8a5 5 0 0 0-5 5v16a1 1 0 0 0 1 1h11V13a5 5 0 0 0-5-5ZM31 8H18v7a1 1 0 0 1-1 1h-3v14h21a1 1 0 0 0 1-1V13a5 5 0 0 0-5-5Z" />
                <path d="M21 0h-6a1 1 0 0 0-1 1v13h2V6h5a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1Z" />
            </svg>
        );
    },
);
