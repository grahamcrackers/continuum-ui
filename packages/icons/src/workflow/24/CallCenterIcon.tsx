import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const CallCenterIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M42 20h-2a16 16 0 0 0-32 0H6a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h6V20h-.1a12.1 12.1 0 0 1 24.2 0H36v15.117a13.956 13.956 0 0 1-8.54 6.4A4.336 4.336 0 0 0 24 40c-2.209 0-4 1.343-4 3s1.791 3 4 3c1.977 0 3.608-1.078 3.931-2.492A16 16 0 0 0 37.826 36H42a4 4 0 0 0 4-4v-8a4 4 0 0 0-4-4Z" />
            </svg>
        );
    },
);
