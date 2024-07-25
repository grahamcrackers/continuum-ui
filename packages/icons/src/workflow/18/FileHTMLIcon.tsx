import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const FileHTMLIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M20 2v10h10L20 2z" />
                <path d="M19 14a1 1 0 0 1-1-1V2H7a1 1 0 0 0-1 1v30a1 1 0 0 0 1 1h22a1 1 0 0 0 1-1V14Zm7.888 16.4h-2.8v-4h-3.2v4h-2.8V19.6h2.8v4h3.2v-4h2.8Zm-10.953-1.09a.257.257 0 0 1-.209.407h-2.744a.256.256 0 0 1-.206-.1L9.315 25l3.461-4.615a.256.256 0 0 1 .206-.1h2.744a.257.257 0 0 1 .209.407L12.43 25Z" />
            </svg>
        );
    },
);
