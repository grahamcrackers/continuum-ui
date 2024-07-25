import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const StraightenOutlineIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M33.5 14H.5a.5.5 0 0 0-.5.5v13a.5.5 0 0 0 .5.5h33a.5.5 0 0 0 .5-.5v-13a.5.5 0 0 0-.5-.5Zm-11.286 2 .018.968C22.232 19.05 18.9 20.1 17 20.1s-5.25-1.05-5.25-3.107V16ZM6 26H2V16h4Zm20 0H8V16h2v1c0 3 3.134 5 7 5s7-2 7-5v-1h2Zm6 0h-4V16h4Z" />
                <circle cx="7" cy="11" r="1.3" />
                <circle cx="27" cy="11" r="1.3" />
                <circle cx="17" cy="5" r="1.3" />
                <circle cx="11" cy="7" r="1.3" />
                <circle cx="23" cy="7" r="1.3" />
            </svg>
        );
    },
);
