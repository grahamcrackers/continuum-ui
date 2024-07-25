import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const HotFixesIcon = React.forwardRef<SVGSVGElement, IconProps>(
    ({ className, size, focusable = false, hidden = true, color = "currentColor", ...props }, forwardedRef) => {
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="36"
                viewBox="0 0 36 36"
                className={iconVariants({ size, className })}
                focusable={focusable}
                aria-hidden={hidden}
                {...props}
                ref={forwardedRef}
            >
                <path d="M14.14 1.787a.5.5 0 0 0-.852.471 15.054 15.054 0 0 1 .653 6.566 16.977 16.977 0 0 1-2.91 6.165 26.831 26.831 0 0 0-2.849 5.5 10.411 10.411 0 1 0 20.223 3.5v-.037c-.076-4.845-3.036-11.542-6.022-16a.5.5 0 0 0-.907.327c.521 8.357-4 11.315-4 11.315S21.124 9.256 14.14 1.787Z" />
            </svg>
        );
    },
);
