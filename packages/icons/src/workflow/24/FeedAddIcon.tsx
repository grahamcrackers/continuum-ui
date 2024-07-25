import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const FeedAddIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M36.1 24.2A11.9 11.9 0 1 0 48 36.1a11.9 11.9 0 0 0-11.9-11.9Zm8 13.4a.5.5 0 0 1-.5.5h-5.5v5.5a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-5.5h-5.5a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 .5-.5h5.5v-5.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v5.5h5.5a.5.5 0 0 1 .5.5Z" />
                <path d="M20.1 36H10v-6h11.272a15.9 15.9 0 0 1 2.366-4H10v-6h28a9.211 9.211 0 0 1 4 1.272V8a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v30a2 2 0 0 0 2 2h12.607a15.935 15.935 0 0 1-.507-4ZM10 10h28v6H10Z" />
            </svg>
        );
    },
);
