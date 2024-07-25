import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const LocationContributionIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M2 5v26a1 1 0 0 0 1 1h30a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1Zm4 3h18v14H6Zm0 20v-4h18v4Zm24 0h-4V8h4Z" />
                <path d="m18.838 10.346-4.988 7.127-2.84-2.573a.5.5 0 0 0-.706.035l-.939 1.038a.5.5 0 0 0 .035.706l3.84 3.476a1.21 1.21 0 0 0 1.8-.2l5.76-8.233a.5.5 0 0 0-.123-.7l-1.147-.8a.5.5 0 0 0-.692.124Z" />
            </svg>
        );
    },
);
