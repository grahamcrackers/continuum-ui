import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const AssetsPublishedIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M8 32H6V8h36v8l4-.875V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v28a2 2 0 0 0 2 2h11.392ZM25.75 37.125l11.276 5.907a1 1 0 0 0 1.344-.446l8.916-20.729ZM22.08 39.25v7.639a.713.713 0 0 0 1.174.544l5.36-4.516Z" />
                <path d="M45.478 20.135a.1.1 0 0 0-.084-.18l-30.878 9.952a.5.5 0 0 0-.08.926l7.917 3.953Z" />
            </svg>
        );
    },
);
