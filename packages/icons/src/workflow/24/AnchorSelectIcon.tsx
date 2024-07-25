import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const AnchorSelectIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M15.8 9.074 35.224 28.2h-10.8l-1.113 1.113-7.511 7.513Zm-2.793-7.688a1 1 0 0 0-1.007 1v41.2a1 1 0 0 0 1.007 1 .978.978 0 0 0 .7-.3L26 32h16.059a1 1 0 0 0 .7-1.712L13.7 1.675a.983.983 0 0 0-.693-.289Z" />
            </svg>
        );
    },
);
