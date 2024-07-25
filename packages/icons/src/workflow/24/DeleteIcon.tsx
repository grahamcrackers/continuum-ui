import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const DeleteIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M41 8h-7V6a4 4 0 0 0-4-4H18a4 4 0 0 0-4 4v2H7a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h1.2l2 30a2 2 0 0 0 2 2h23.6a2 2 0 0 0 2-2l2-30H41a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1ZM18 6h12v2H18Zm-1.24 31.974a2 2 0 0 1-2.134-1.857L13.383 18.16a2 2 0 0 1 3.991-.277l1.243 17.957a2 2 0 0 1-1.857 2.134ZM26 36a2 2 0 0 1-4 0V18a2 2 0 0 1 4 0Zm7.374.117a2 2 0 0 1-3.991-.277l1.243-17.957a2 2 0 0 1 3.991.277Z" />
            </svg>
        );
    },
);
