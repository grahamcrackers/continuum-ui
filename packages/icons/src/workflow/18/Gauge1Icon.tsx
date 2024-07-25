import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const Gauge1Icon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M33.965 18.754A16 16 0 0 0 2 19.813c0 .072.013.142.014.214l3.02-.327a12.126 12.126 0 0 1 .344-2.892 13.2 13.2 0 0 1 13.17-9.984A13.016 13.016 0 0 1 31 19.813a12.878 12.878 0 0 1-.691 4.117.492.492 0 0 0 .116.506L31.987 26a.5.5 0 0 0 .818-.154 15.842 15.842 0 0 0 1.16-7.092Z" />
                <path d="M.846 23.214a.691.691 0 0 0 0 1.368L17.814 27.1a3.219 3.219 0 0 0 3.775-3.166 3.219 3.219 0 0 0-3.766-3.177Z" />
            </svg>
        );
    },
);
