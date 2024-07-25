import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const EventShareIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M4 4h16v8l1.739 1.739L24 11.232V0H0v24h6v-4H4V4z" />
                <path d="m18.384 17.626-9.53-9.479A.491.491 0 0 0 8.5 8a.5.5 0 0 0-.5.5v22.782a.5.5 0 0 0 .5.5.491.491 0 0 0 .35-.148L14 24.656V22a2 2 0 0 1 2-2h2.233a2.976 2.976 0 0 1 .151-2.374ZM31.722 18.331 26 12l-5.708 6.331A1 1 0 0 0 21.035 20H24v7.5a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5V20h2.979a1 1 0 0 0 .743-1.669Z" />
                <path d="M32 22v10H20V22h-3a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V23a1 1 0 0 0-1-1Z" />
            </svg>
        );
    },
);
