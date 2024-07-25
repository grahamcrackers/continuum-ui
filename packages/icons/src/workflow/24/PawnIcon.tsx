import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const PawnIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <rect height="6" rx="1.265" ry="1.265" width="32" x="8" y="42" />
                <path d="M34.775 18h-21.55A1.225 1.225 0 0 0 12 19.225v3.551A1.225 1.225 0 0 0 13.225 24h6.025L14 38h20l-5.25-14h6.025A1.225 1.225 0 0 0 36 22.775v-3.55A1.225 1.225 0 0 0 34.775 18Z" />
                <circle cx="24" cy="10" r="8" />
            </svg>
        );
    },
);
