import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const WebPagesIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M44 14H12a2 2 0 0 0-2 2v26a2 2 0 0 0 2 2h32a2 2 0 0 0 2-2V16a2 2 0 0 0-2-2Zm-2 26H14V22h28Z" />
                <path d="M6 10h32V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v26a2 2 0 0 0 2 2h2Z" />
                <path d="M44 14H12a2 2 0 0 0-2 2v26a2 2 0 0 0 2 2h32a2 2 0 0 0 2-2V16a2 2 0 0 0-2-2Zm-2 26H14V22h28Z" />
                <path d="M6 10h32V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v26a2 2 0 0 0 2 2h2Z" />
            </svg>
        );
    },
);
