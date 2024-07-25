import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const SelectionMoveIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M40 14h4v8h-4zM4 14h4v8H4zM4 26h4v8H4zM44 6a2 2 0 0 0-2-2h-4v4h2v2h4ZM8 8h2V4H6a2 2 0 0 0-2 2v4h4ZM8 40v-2H4v4a2 2 0 0 0 2 2h4v-4ZM14 40h8v4h-8zM26 4h8v4h-8zM14 4h8v4h-8zM46.89 31.687l-5.524-5.451a.785.785 0 0 0-.56-.236.8.8 0 0 0-.806.8V30h-6v-6h3.2a.8.8 0 0 0 .8-.806.785.785 0 0 0-.236-.56l-5.451-5.524a.5.5 0 0 0-.626 0l-5.451 5.524a.785.785 0 0 0-.236.56.8.8 0 0 0 .8.806H30v6h-6v-3.2a.8.8 0 0 0-.806-.8.785.785 0 0 0-.56.236l-5.524 5.451a.5.5 0 0 0 0 .626l5.524 5.451a.785.785 0 0 0 .56.236.8.8 0 0 0 .806-.8V34h6v6h-3.2a.8.8 0 0 0-.8.806.785.785 0 0 0 .236.56l5.451 5.524a.5.5 0 0 0 .626 0l5.451-5.524a.785.785 0 0 0 .236-.56.8.8 0 0 0-.8-.806H34v-6h6v3.2a.8.8 0 0 0 .806.8.785.785 0 0 0 .56-.236l5.524-5.451a.5.5 0 0 0 0-.626Z" />
            </svg>
        );
    },
);
