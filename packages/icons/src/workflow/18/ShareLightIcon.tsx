import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const ShareLightIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M24.476 7.165 18 0l-6.46 7.165a.5.5 0 0 0 .371.835H16v11.5a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5V8h4.105a.5.5 0 0 0 .371-.835Z" />
                <path d="M33 10h-7v2h6v20H4V12h6v-2H3a1 1 0 0 0-1 1v22a1 1 0 0 0 1 1h30a1 1 0 0 0 1-1V11a1 1 0 0 0-1-1Z" />
            </svg>
        );
    },
);
