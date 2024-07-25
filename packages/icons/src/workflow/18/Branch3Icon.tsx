import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const Branch3Icon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M14 28a5.962 5.962 0 0 0-2.2-4.608l4.868-9.552a5.622 5.622 0 0 0 2.665 0l4.867 9.552a5.908 5.908 0 1 0 2.641-1.275l-4.9-9.622a6.015 6.015 0 0 0 .846-.908l.006-.008a5.987 5.987 0 0 0 .6-.989c.018-.037.041-.07.058-.106a5.965 5.965 0 0 0 .343-.994c.019-.073.05-.141.067-.214a6 6 0 1 0-11.715 0c.016.074.048.141.067.214a5.965 5.965 0 0 0 .343.994c.017.037.04.07.058.106a5.987 5.987 0 0 0 .6.989l.006.008a6.015 6.015 0 0 0 .846.908l-4.9 9.622A6 6 0 1 0 14 28Zm17 0a3 3 0 1 1-3-3 3 3 0 0 1 3 3ZM5 28a3 3 0 1 1 3 3 3 3 0 0 1-3-3Z" />
            </svg>
        );
    },
);
