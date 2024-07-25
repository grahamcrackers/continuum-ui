import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const SummarizeIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <rect height="4" rx="1" ry="1" width="24" x="6" y="2" />
                <rect height="4" rx="1" ry="1" width="24" x="6" y="18" />
                <rect height="4" rx="1" ry="1" width="32" x="2" y="10" />
                <path d="M19.5 34a.5.5 0 0 0 .5-.5V30h2.793a.5.5 0 0 0 .354-.854L18 24l-5.146 5.146a.5.5 0 0 0 .354.854H16v3.5a.5.5 0 0 0 .5.5Z" />
            </svg>
        );
    },
);
