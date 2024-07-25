import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const AnnotateIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="m33.6 42 8.4-8.4h-7.9a.5.5 0 0 0-.5.5Z" />
                <path d="M40 6H8a2 2 0 0 0-2 2v32a2 2 0 0 0 2 2h22V32a2 2 0 0 1 2-2h10V8a2 2 0 0 0-2-2ZM25.5 34h-13a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5Zm10-8h-23a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 .5-.5h23a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5Zm0-8h-23a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 .5-.5h23a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5Z" />
            </svg>
        );
    },
);
