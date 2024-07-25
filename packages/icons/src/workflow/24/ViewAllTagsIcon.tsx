import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const ViewAllTagsIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <rect height="6" rx="1" ry="1" width="6" x="4" y="4" />
                <rect height="6" rx="1" ry="1" width="28" x="14" y="4" />
                <rect height="6" rx="1" ry="1" width="6" x="4" y="14" />
                <rect height="6" rx="1" ry="1" width="6" x="4" y="24" />
                <rect height="6" rx="1" ry="1" width="6" x="4" y="34" />
                <path d="M19.465 37.508A4.958 4.958 0 0 1 18 34h-3a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h6.957ZM18 24h-3a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h3ZM23 18h10.973a5.028 5.028 0 0 1 3.535 1.465l.535.535H41a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1H15a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h4.025A4.976 4.976 0 0 1 23 18ZM47.614 35.227 34.679 22.293a1 1 0 0 0-.707-.293H23a1 1 0 0 0-1 1v10.972a1 1 0 0 0 .293.707l12.934 12.935a1 1 0 0 0 1.414 0l10.973-10.972a1 1 0 0 0 0-1.415Zm-20.6-5.214a3 3 0 1 1 3-3 3 3 0 0 1-3.001 3Z" />
            </svg>
        );
    },
);
