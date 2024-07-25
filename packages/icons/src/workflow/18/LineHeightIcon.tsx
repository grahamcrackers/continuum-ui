import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const LineHeightIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <rect height="4" rx="1" ry="1" width="22" x="12" y="4" />
                <rect height="4" rx="1" ry="1" width="22" x="12" y="16" />
                <rect height="4" rx="1" ry="1" width="22" x="12" y="28" />
                <path d="M9 30H6.994L7 8h2.006a.5.5 0 0 0 .5-.5.49.49 0 0 0-.147-.35L5.824 3.113a.5.5 0 0 0-.633 0L1.655 7.146a.491.491 0 0 0-.148.35.5.5 0 0 0 .5.5h2.008L4.009 30H2a.5.5 0 0 0-.5.5.49.49 0 0 0 .147.35l3.537 4.033a.5.5 0 0 0 .632 0l3.536-4.033a.491.491 0 0 0 .148-.35.5.5 0 0 0-.5-.5Z" />
            </svg>
        );
    },
);
