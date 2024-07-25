import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const ImageCarouselIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <rect height="28" rx="2" ry="2" width="28" x="10" y="4" />
                <path d="M2 28h4V8H2a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2ZM46 28h-4V8h4a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2Z" />
                <circle cx="20" cy="42" r="3" />
                <circle cx="28" cy="42" r="2.25" />
                <circle cx="12" cy="42" r="2.25" />
                <circle cx="36" cy="42" r="2.25" />
            </svg>
        );
    },
);
