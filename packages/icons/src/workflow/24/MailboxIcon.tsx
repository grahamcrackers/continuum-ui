import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const MailboxIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M30 0h-8a2 2 0 0 0-2 2v16h4V8h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2ZM16 18a6 6 0 0 0-6-6H6a6 6 0 0 0-6 6v20a2 2 0 0 0 2 2h14Z" />
                <path d="M42 12H28v8a2 2 0 0 1-2 2h-6v18h26a2 2 0 0 0 2-2V18a6 6 0 0 0-6-6Z" />
            </svg>
        );
    },
);
