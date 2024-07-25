import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const TextBulletedAttachIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M43 8H17a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h26a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1ZM8 36a4 4 0 1 0 4 4 4 4 0 0 0-4-4Zm8-11v2a1 1 0 0 0 1 1h12.632l4-4H17a1 1 0 0 0-1 1Zm-8-5a4 4 0 1 0 4 4 4 4 0 0 0-4-4ZM8 4a4 4 0 1 0 4 4 4 4 0 0 0-4-4Zm9 36a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h7.44a10.922 10.922 0 0 1-1.157-4ZM45.4 37.326l-5.566 5.566a7 7 0 0 1-9.9-9.9l7.528-7.528a5 5 0 0 1 7.071 0 4.816 4.816 0 0 1-.156 6.915l-6.542 6.542a2.82 2.82 0 0 1-4.086.156 2.789 2.789 0 0 1 .184-4.059l4.58-4.58 1.23 1.23-4.58 4.58a1 1 0 0 0 1.414 1.414l6.542-6.542a3 3 0 0 0-4.243-4.243l-7.528 7.528a5.232 5.232 0 0 0-.1 7.26 5.127 5.127 0 0 0 7.172-.189l5.566-5.566Z" />
            </svg>
        );
    },
);
