import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const DataDownloadIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <ellipse cx="18" cy="7" rx="16" ry="5" />
                <path d="M10.777 25.179a2.422 2.422 0 0 1-.628-1.6C6.461 22.956 3.018 21.884 2 20.27V29c0 2.761 7.164 5 16 5 .277 0 .547-.009.821-.013ZM33 13v5.727A2.36 2.36 0 0 0 34 17v-6.73c-.973 1.23-2.926 2.11-5.229 2.73ZM12.63 21H17v-6.74c-5.094-.142-13.327-1.335-15-3.99V17c0 1.992 3.736 3.707 9.13 4.51a2.437 2.437 0 0 1 1.5-.51Z" />
                <path d="M35.146 24.854a.5.5 0 0 0-.353-.854H30v-8H20v8h-4.793a.5.5 0 0 0-.353.854L25 36Z" />
            </svg>
        );
    },
);
