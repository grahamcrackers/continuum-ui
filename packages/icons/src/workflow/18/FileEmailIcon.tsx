import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const FileEmailIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M16 23a1 1 0 0 1 1-1h13v-8H19a1 1 0 0 1-1-1V2H7a1 1 0 0 0-1 1v30a1 1 0 0 0 1 1h9Z" />
                <path d="M28.208 32.25 36 26.584V35a1 1 0 0 1-1 1H19a1 1 0 0 1-1-1v-8.416l7.792 5.667a2.054 2.054 0 0 0 2.416-.001ZM27 30.347 36 24H18Z" />
            </svg>
        );
    },
);
