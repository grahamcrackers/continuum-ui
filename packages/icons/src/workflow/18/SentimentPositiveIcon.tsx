import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const SentimentPositiveIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M18 2a16 16 0 1 0 16 16A16 16 0 0 0 18 2Zm-5.635 6.534c1.656 0 3 1.679 3 3.75s-1.344 3.75-3 3.75-3-1.679-3-3.75 1.343-3.75 3-3.75Zm11.108-.1c1.657 0 3 1.679 3 3.75s-1.343 3.75-3 3.75-3-1.679-3-3.75 1.343-3.752 3-3.752ZM18 28.04c-5.033 0-9.556-3.633-10-8.14h20c-.444 4.507-4.967 8.14-10 8.14Z" />
            </svg>
        );
    },
);
