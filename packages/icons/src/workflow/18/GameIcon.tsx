import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const GameIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M35.091 24.854 32.562 16.4c-1.727-5.765-6.574-10.38-12.033-10.38h-5.821C9.248 6.02 4.4 10.635 2.675 16.4l-2.53 8.454c-.727 2.427 1.4 4.708 3.551 3.81l1.61-1.294a19.328 19.328 0 0 1 24.624 0l1.61 1.294c2.152.898 4.278-1.383 3.551-3.81Zm-23.81-4.085a5 5 0 1 1 5-5 5 5 0 0 1-5 5ZM23.114 16.2a3.5 3.5 0 1 1 3.5-3.5 3.5 3.5 0 0 1-3.5 3.5ZM28.5 23a3.5 3.5 0 1 1 3.5-3.5 3.5 3.5 0 0 1-3.5 3.5Z" />
                <circle cx="11.281" cy="15.769" r="2.5" />
            </svg>
        );
    },
);
