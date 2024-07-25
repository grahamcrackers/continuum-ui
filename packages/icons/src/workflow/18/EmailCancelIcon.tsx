import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const EmailCancelIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M18 18.188 36 4.665v-1.5A1.147 1.147 0 0 0 34.875 2H1.125A1.147 1.147 0 0 0 0 3.167v1.469ZM11.165 15.938 0 7.512v16.683l11.165-8.257zM14.7 27a12.244 12.244 0 0 1 2.092-6.863c-.025-.018-.057-.024-.082-.043l-3.628-2.719L0 27.068v1.765A1.147 1.147 0 0 0 1.125 30h13.959a12.273 12.273 0 0 1-.384-3ZM27 14.7a12.253 12.253 0 0 1 9 3.935V7.541l-9.577 7.188c.193-.009.382-.029.577-.029ZM27 18.1a8.9 8.9 0 1 0 8.9 8.9 8.9 8.9 0 0 0-8.9-8.9Zm5.826 12.267a.5.5 0 0 1 0 .707l-1.752 1.752a.5.5 0 0 1-.707 0L27 29.459l-3.367 3.367a.5.5 0 0 1-.707 0l-1.752-1.752a.5.5 0 0 1 0-.707L24.541 27l-3.367-3.367a.5.5 0 0 1 0-.707l1.752-1.752a.5.5 0 0 1 .707 0L27 24.541l3.367-3.367a.5.5 0 0 1 .707 0l1.752 1.752a.5.5 0 0 1 0 .707L29.459 27Z" />
            </svg>
        );
    },
);
