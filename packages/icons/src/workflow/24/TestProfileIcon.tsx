import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const TestProfileIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="m43.121 38.879-9.888-9.888a16 16 0 1 0-4.242 4.242l9.888 9.888a3 3 0 0 0 4.242-4.242ZM29.178 27.864a10.027 10.027 0 0 0-4.961-1.719 1.165 1.165 0 0 1-1.009-1.17v-1.689a1.165 1.165 0 0 1 .3-.754 8.925 8.925 0 0 0 2.028-5.566c0-4.212-2.234-6.566-5.609-6.566s-5.673 2.446-5.673 6.566a9.014 9.014 0 0 0 2.125 5.566 1.171 1.171 0 0 1 .3.754v1.682a1.16 1.16 0 0 1-1.013 1.171 9.857 9.857 0 0 0-4.928 1.628 12.1 12.1 0 1 1 18.443.1Z" />
            </svg>
        );
    },
);
