import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const FeedIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M40 40H8a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h32a2 2 0 0 1 2 2v30a2 2 0 0 1-2 2Zm-2-30H10v6h28Zm0 10H10v6h28Zm0 10H10v6h28Z" />
            </svg>
        );
    },
);
