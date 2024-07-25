import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const AsteriskIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M37.9 37.8c.3.3.5.7 0 1.1l-6.2 4c-.5.3-.7.1-.9-.4l-7.7-13.4L13 40.2c-.1.2-.4.4-.7 0l-4.8-5c-.5-.3-.4-.6 0-.9l11.4-9.5-13-4.9c-.2 0-.5-.4-.3-.9L9 12.2a.526.526 0 0 1 .9-.2l11.4 7.4.7-14.6a.526.526 0 0 1 .6-.6l8.3 1.1c.5 0 .6.2.5.7l-3.9 14.3 13.2-4c.3-.2.6-.2.8.4l1.3 7.4c.1.5 0 .7-.4.7l-13.8 1.1Z" />
            </svg>
        );
    },
);
