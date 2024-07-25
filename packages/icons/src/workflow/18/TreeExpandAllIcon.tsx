import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const TreeExpandAllIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M9 8h17V3a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v22a1 1 0 0 0 1 1h5V9a1 1 0 0 1 1-1Z" />
                <path d="M10 11v22a1 1 0 0 0 1 1h22a1 1 0 0 0 1-1V11a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1Zm19.5 13H24v5.5a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V24h-5.5a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 .5-.5H20v-5.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5V20h5.5a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5Z" />
            </svg>
        );
    },
);
