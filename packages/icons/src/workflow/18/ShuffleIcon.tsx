import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const ShuffleIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M3 10h4.111l2.65 4.139 3.4-5.528-2.439-3.806a2 2 0 0 0-1.6-.8H3A1 1 0 0 0 2 5v4a1 1 0 0 0 1 1ZM27.2.206A.688.688 0 0 0 26.705 0a.7.7 0 0 0-.7.7V4H21a2 2 0 0 0-1.6.806L7.111 24H3a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h6.118a2 2 0 0 0 1.6-.8L23.03 10H26v3.3a.7.7 0 0 0 .7.7.688.688 0 0 0 .49-.206l5.69-6.469a.5.5 0 0 0 0-.65Z" />
                <path d="M27.2 20.206a.688.688 0 0 0-.49-.206.7.7 0 0 0-.7.7V24h-2.98l-2.723-4.248-3.407 5.536 2.5 3.906A2 2 0 0 0 21 30h5v3.3a.7.7 0 0 0 .7.7.688.688 0 0 0 .49-.206l5.685-6.469a.5.5 0 0 0 0-.65Z" />
            </svg>
        );
    },
);
