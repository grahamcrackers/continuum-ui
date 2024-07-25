import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const OfferDeleteIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M47 16h-2a1 1 0 0 0-1 1v5.275A15.9 15.9 0 0 1 46.41 24H47a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1Zm-36-6h6a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1Zm10 0h6a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1ZM1 24h2a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1H1a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1ZM44 6h-3a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h3v3a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-3a4 4 0 0 0-4-4Zm-7 0h-6a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1Zm-12.581 9.594a.448.448 0 0 0-.838 0l-2.394 6.33-6.76.32a.448.448 0 0 0-.259.8l5.28 4.231-1.783 6.525a.448.448 0 0 0 .678.493l2.057-1.35A15.92 15.92 0 0 1 28.456 22l-1.644-.078ZM20 41v2a1 1 0 0 0 1 1h1.275a15.753 15.753 0 0 1-1.629-3.928A1 1 0 0 0 20 41ZM1 34h2a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1H1a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1Zm16 6h-6a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1ZM7 6H4a4 4 0 0 0-4 4v3a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-3h3a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1Zm0 34H4v-3a1 1 0 0 0-1-1H1a1 1 0 0 0-1 1v3a4 4 0 0 0 4 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1ZM36 24.1A11.9 11.9 0 1 0 47.9 36 11.9 11.9 0 0 0 36 24.1Zm8 13.4a.5.5 0 0 1-.5.5h-15a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 .5-.5h15a.5.5 0 0 1 .5.5Z" />
            </svg>
        );
    },
);
