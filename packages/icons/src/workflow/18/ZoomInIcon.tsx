import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const ZoomInIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M21.5 14H18v-3.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5V14h-3.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5H14v3.5a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5V18h3.5a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5Z" />
                <path d="M35.173 32.215 27.256 24.3a14.031 14.031 0 1 0-2.956 2.957l7.916 7.916a2.1 2.1 0 0 0 2.958-2.958ZM6 16a10 10 0 1 1 10 10A10 10 0 0 1 6 16Z" />
            </svg>
        );
    },
);
