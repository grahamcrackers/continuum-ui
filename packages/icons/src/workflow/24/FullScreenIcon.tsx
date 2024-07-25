import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const FullScreenIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <rect height="24" rx="2" ry="2" width="28" x="10" y="12" />
                <path d="M42 34.5V40h-5.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5H46v-9.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM6 40v-5.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5V44h9.5a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5ZM36 4.5v3a.5.5 0 0 0 .5.5H42v5.5a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5V4h-9.5a.5.5 0 0 0-.5.5ZM6 8h5.5a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5H2v9.5a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5Z" />
            </svg>
        );
    },
);
