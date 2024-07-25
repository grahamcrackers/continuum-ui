import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const SentimentNeutralIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M18 2a16 16 0 1 0 16 16A16 16 0 0 0 18 2Zm-5.635 8.534c1.656 0 3 1.679 3 3.75s-1.344 3.75-3 3.75-3-1.679-3-3.75 1.343-3.75 3-3.75ZM23.2 26H12.8a.8.8 0 0 1-.8-.8v-.4a.8.8 0 0 1 .8-.8h10.4a.8.8 0 0 1 .8.8v.4a.8.8 0 0 1-.8.8Zm.273-8.068c-1.657 0-3-1.679-3-3.75s1.343-3.75 3-3.75 3 1.679 3 3.75-1.343 3.75-3 3.75Z" />
            </svg>
        );
    },
);
