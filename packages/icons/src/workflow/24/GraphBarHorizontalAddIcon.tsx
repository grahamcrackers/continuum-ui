import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const GraphBarHorizontalAddIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <rect height="44" rx="1" ry="1" width="4" x="4" y="4" />
                <path d="M42 6H10v8h32a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2ZM26 16H10v8h15.59a15.931 15.931 0 0 1 2.347-1.687A1.873 1.873 0 0 0 28 22v-4a2 2 0 0 0-2-2Zm-8 10h-8v8h8a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2Zm-4 10h-4v8h4a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2ZM24.1 36A11.9 11.9 0 1 0 36 24.1 11.9 11.9 0 0 0 24.1 36Zm13.4-8a.5.5 0 0 1 .5.5V34h5.5a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5H38v5.5a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V38h-5.5a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 .5-.5H34v-5.5a.5.5 0 0 1 .5-.5Z" />
            </svg>
        );
    },
);
