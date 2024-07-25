import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const FlipVerticalIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M2 16h2v2H2zM6 16h2v2H6zM10 16h2v2h-2zM14 16h2v2h-2zM18 16h2v2h-2zM22 16h2v2h-2zM26 16h2v2h-2zM30 16h2v2h-2zM5.3 30.249l10.9-10.072a1.01 1.01 0 0 1 1.428 0L28.7 30.249a1.01 1.01 0 0 1-.714 1.724H6.012a1.01 1.01 0 0 1-.712-1.724ZM25.921 3.818l-8.843 8.168L8.1 3.818ZM29 3.017A1.009 1.009 0 0 0 27.988 2H6.012A1.009 1.009 0 0 0 5 3.018a.987.987 0 0 0 .3.706L16.367 13.8a1.01 1.01 0 0 0 1.428 0L28.7 3.724a.989.989 0 0 0 .3-.707Z" />
            </svg>
        );
    },
);
