import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const EditInIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M20.44 40H8V8h32v10.681c.06 0 .117-.021.178-.023l.306-.009.241.029A5.138 5.138 0 0 1 44 20.159V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v36a2 2 0 0 0 2 2h13.246Z" />
                <path d="m46.986 28.793-5.765-5.765a1.111 1.111 0 0 0-.816-.36c-.013 0-.1-.012-.11-.012a1.35 1.35 0 0 0-.906.426L25.705 36.767a.986.986 0 0 0-.251.421l-2.778 9.305c-.114.377.459.851.783.851a.293.293 0 0 0 .061-.006c.277-.064 7.867-2.345 9.312-2.779a.984.984 0 0 0 .414-.249l13.686-13.685a1.375 1.375 0 0 0 .4-.884 1.221 1.221 0 0 0-.346-.948Zm-21.7 15.94L27.3 38l4.72 4.708c-2.163.651-4.864 1.467-6.731 2.025Z" />
            </svg>
        );
    },
);
