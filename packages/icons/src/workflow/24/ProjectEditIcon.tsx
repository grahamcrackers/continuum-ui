import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const ProjectEditIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="m46.986 28.793-5.765-5.765a1.111 1.111 0 0 0-.816-.36c-.013 0-.1-.012-.11-.012a1.35 1.35 0 0 0-.906.426L25.705 36.767a.986.986 0 0 0-.251.421l-2.778 9.305c-.114.377.459.851.783.851a.293.293 0 0 0 .061-.006c.277-.064 7.867-2.345 9.312-2.779a.984.984 0 0 0 .414-.249l13.686-13.685a1.375 1.375 0 0 0 .4-.884 1.221 1.221 0 0 0-.346-.948Zm-21.7 15.94L27.3 38l4.72 4.708c-2.163.651-4.864 1.467-6.731 2.025Z" />
                <path d="M22.889 33.927 24.815 32H6V8h36v10.947a5.2 5.2 0 0 1 2.055 1.259L46 22.151V5a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v30a1 1 0 0 0 1 1h18.636a5.023 5.023 0 0 1 1.253-2.073Z" />
            </svg>
        );
    },
);
