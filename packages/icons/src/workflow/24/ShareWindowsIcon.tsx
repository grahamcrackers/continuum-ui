import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const ShareWindowsIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M42.468 21.059a17.446 17.446 0 0 0-1.614-5.666 9.781 9.781 0 0 1-3.471 3.11 13.2 13.2 0 0 1 .7 3.022 12.969 12.969 0 0 1-2.179 8.706 6.585 6.585 0 1 0 2.97 3.4 17.348 17.348 0 0 0 3.594-12.572ZM22.865 35.781a13.046 13.046 0 0 1-9.165-6.462 6.612 6.612 0 1 0-4.3 1.253 17.376 17.376 0 0 0 14.47 9.764 9.914 9.914 0 0 1-1.005-4.555ZM35.994 4.094a6.587 6.587 0 0 0-8.345 1.533 17.471 17.471 0 0 0-17.674 8.512 9.82 9.82 0 0 1 4.491 1.173 16 16 0 0 1 .458-.613 12.982 12.982 0 0 1 8.783-4.784 13.357 13.357 0 0 1 1.409-.075c.344 0 .686.02 1.027.047a6.588 6.588 0 1 0 9.851-5.793Z" />
            </svg>
        );
    },
);
