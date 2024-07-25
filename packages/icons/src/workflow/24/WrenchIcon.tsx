import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const WrenchIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M42.005 36.447 26.651 21.093c-4.889-4.931-1.666-11.607-6.3-16.244C16.363.863 8.54 1.885 6.756 3.008a.2.2 0 0 0 .036.336l8.417 4.185a.5.5 0 0 1 .276.408l.391 4.932a1 1 0 0 1-.458.922l-4.168 2.666a.5.5 0 0 1-.492.026l-8.482-4.216a.2.2 0 0 0-.286.121c-.206 1.356 1.672 5.473 4.216 8.017 4.243 4.243 10.55 2.106 13.374 4.93L34.6 43.09a5.081 5.081 0 0 0 .533.63 5 5 0 0 0 7.418-.383 5.2 5.2 0 0 0-.546-6.89Z" />
            </svg>
        );
    },
);
