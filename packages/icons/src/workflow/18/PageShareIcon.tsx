import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const PageShareIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M29.722 18.331 24 12l-5.708 6.331A1 1 0 0 0 19.035 20H22v7.5a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5V20h2.979a1 1 0 0 0 .743-1.669Z" />
                <path d="M30 22v10H18V22h-3a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V23a1 1 0 0 0-1-1Z" />
                <path d="M12 30H4V10h28v10h2V5a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v26a1 1 0 0 0 1 1h9Z" />
            </svg>
        );
    },
);
