import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const ChevronDownIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M22.585 31.7 11.94 21.05a2 2 0 0 1 0-2.828l.282-.282a2.006 2.006 0 0 1 2.828 0L24 26.888l8.949-8.948a2.006 2.006 0 0 1 2.828 0l.282.282a2 2 0 0 1 0 2.828L25.414 31.7a2 2 0 0 1-2.829 0Z" />
            </svg>
        );
    },
);
