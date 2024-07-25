import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const OfferIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="m24.419 15.594 2.393 6.33 6.76.32a.448.448 0 0 1 .259.8l-5.281 4.232 1.785 6.524a.448.448 0 0 1-.678.493L24 30.58l-5.657 3.714a.448.448 0 0 1-.678-.493l1.784-6.528-5.281-4.232a.448.448 0 0 1 .259-.8l6.76-.32 2.393-6.33a.448.448 0 0 1 .839.003ZM11 10h6a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1ZM3 16H1a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1ZM0 10v3a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-3h3a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H4a4 4 0 0 0-4 4ZM3 36H1a1 1 0 0 0-1 1v3a4 4 0 0 0 4 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1H4v-3a1 1 0 0 0-1-1ZM37 10h-6a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1ZM45 16h2a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1ZM3 26H1a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1ZM45 26h2a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1ZM48 10v3a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-3h-3a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h3a4 4 0 0 1 4 4ZM45 36h2a1 1 0 0 1 1 1v3a4 4 0 0 1-4 4h-3a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h3v-3a1 1 0 0 1 1-1ZM27 10h-6a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1ZM11 44h6a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1ZM37 44h-6a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1ZM27 44h-6a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1Z" />
            </svg>
        );
    },
);
