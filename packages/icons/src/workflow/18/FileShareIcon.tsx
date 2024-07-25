import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const FileShareIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M16 2v10H6L16 2z" />
                <path d="M14 23a3 3 0 0 1 3-3h1.208a3 3 0 0 1 .6-3.008L26 9.016l4 4.427V3a1 1 0 0 0-1-1H18v11a1 1 0 0 1-1 1H6v19a1 1 0 0 0 1 1h7Z" />
                <path d="M31.722 18.331 26 12l-5.708 6.331A1 1 0 0 0 21.035 20H24v7.5a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5V20h2.979a1 1 0 0 0 .743-1.669Z" />
                <path d="M32 22v10H20V22h-3a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V23a1 1 0 0 0-1-1Z" />
            </svg>
        );
    },
);
