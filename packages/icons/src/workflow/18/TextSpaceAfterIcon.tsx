import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const TextSpaceAfterIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <rect height="4" rx="1" ry="1" width="20" x="14" y="8" />
                <rect height="4" rx="1" ry="1" width="20" x="14" y="14" />
                <rect height="4" rx="1" ry="1" width="20" x="14" y="2" />
                <path d="M4 33.328a.5.5 0 0 0 .866.341L10 28l-5.134-5.669a.5.5 0 0 0-.866.341ZM34 33V23a1 1 0 0 0-1-1H15a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1Zm-2-1H16v-8h16Z" />
            </svg>
        );
    },
);
