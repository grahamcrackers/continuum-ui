import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const LineHeightIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <rect height="4" rx="1" ry="1" width="26" x="18" y="6" />
                <rect height="4" rx="1" ry="1" width="26" x="18" y="22" />
                <rect height="4" rx="1" ry="1" width="26" x="18" y="38" />
                <path d="M13.2 10a.8.8 0 0 0 .8-.806.785.785 0 0 0-.236-.56L8.313 3.11a.5.5 0 0 0-.626 0L2.236 8.634a.785.785 0 0 0-.236.56.8.8 0 0 0 .8.806H6v28H2.8a.8.8 0 0 0-.8.806.785.785 0 0 0 .236.56l5.451 5.524a.5.5 0 0 0 .626 0l5.451-5.524a.785.785 0 0 0 .236-.56.8.8 0 0 0-.8-.806H10V10Z" />
            </svg>
        );
    },
);
