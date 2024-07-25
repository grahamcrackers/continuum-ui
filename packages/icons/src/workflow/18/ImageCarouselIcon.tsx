import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const ImageCarouselIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <rect height="22" rx="1" ry="1" width="24" x="6" y="2" />
                <path d="M4 22H1a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h3ZM35 22h-3V6h3a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1Z" />
                <circle cx="8" cy="30" r="1.4" />
                <circle cx="14" cy="30" r="2.1" />
                <circle cx="20" cy="30" r="1.4" />
                <circle cx="26" cy="30" r="1.4" />
            </svg>
        );
    },
);
