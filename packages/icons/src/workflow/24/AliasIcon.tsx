import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const AliasIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M38 5a1 1 0 0 0-1-1H14.94a1 1 0 0 0-.943 1 .984.984 0 0 0 .294.7l5.689 5.689a66.854 66.854 0 0 0-6.159 11.115 36.062 36.062 0 0 0-2.677 10.457c-.1 1.05-.147 2.092-.147 3.124a36.824 36.824 0 0 0 .71 7.087 1.018 1.018 0 0 0 1.993.028l.007-.028a31.279 31.279 0 0 1 3.2-8.524 28.012 28.012 0 0 1 5.3-6.688 55.887 55.887 0 0 1 8.2-6.152l5.893 5.897a.981.981 0 0 0 .7.3 1 1 0 0 0 1-.948V5Z" />
            </svg>
        );
    },
);
