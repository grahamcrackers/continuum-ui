import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const Gauge2Icon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="m8.308 25.05-2.823-3.42c-.1-.127-.178-.27-.271-.4a19.74 19.74 0 0 0 .623 15.135.994.994 0 0 0 1.6.257l1.53-1.53a.991.991 0 0 0 .207-1.079 15.682 15.682 0 0 1-.866-8.963Zm7.461-10.665a15.46 15.46 0 0 1 6.038-2.194A15.963 15.963 0 0 1 38.824 34.01a.986.986 0 0 0 .207 1.077l1.529 1.53a.994.994 0 0 0 1.6-.257 19.8 19.8 0 0 0 1.577-11.56 20 20 0 0 0-31.111-13.2ZM8.378 14.883a1.684 1.684 0 0 0-.178 2.282l13.129 17.324a3.7 3.7 0 0 0 5.419.419 3.7 3.7 0 0 0 0-5.436L10.667 14.884a1.685 1.685 0 0 0-2.289-.001Z" />
            </svg>
        );
    },
);
