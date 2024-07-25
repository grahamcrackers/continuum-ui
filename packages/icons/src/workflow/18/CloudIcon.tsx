import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const CloudIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M29.571 28.715a6.429 6.429 0 1 0 0-12.857 6.497 6.497 0 0 0-.725.04 8.144 8.144 0 1 0-15.922-3.235 6.862 6.862 0 0 0-8.407 8.394 3.857 3.857 0 1 0-.66 7.658Z" />
            </svg>
        );
    },
);
