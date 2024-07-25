import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const LinearGradientIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path opacity=".9" d="M4 32v-2h28v2z" />
                <path opacity=".8" d="M4 30v-2h28v2z" />
                <path opacity=".7" d="M4 28v-2h28v2z" />
                <path opacity=".6" d="M4 26v-2h28v2z" />
                <path opacity=".5" d="M4 24v-2h28v2z" />
                <path opacity=".4" d="M4 22v-2h28v2z" />
                <path opacity=".25" d="M4 16v-2h28v2z" />
                <path opacity=".3" d="M4 18v-2h28v2z" />
                <path opacity=".35" d="M4 20v-2h28v2z" />
                <path opacity=".2" d="M4 14v-2h28v2z" />
                <path opacity=".15" d="M4 12v-2h28v2z" />
                <path opacity=".1" d="M4 10V8h28v2z" />
                <path opacity=".05" d="M4 8V6h28v2z" />
                <path d="M3 34h30a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v30a1 1 0 0 0 1 1ZM32 4v28H4V4Z" />
            </svg>
        );
    },
);
