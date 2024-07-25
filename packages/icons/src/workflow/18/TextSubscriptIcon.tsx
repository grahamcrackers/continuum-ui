import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const TextSubscriptIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M5 4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V8h6v20h-3a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1h-3V8h6v3a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1ZM31.742 34c-.121 0-.16-.039-.16-.141v-8.054a8.128 8.128 0 0 1-2.1.72c-.119.02-.158 0-.158-.121v-1.7c0-.1.02-.141.119-.16a9.969 9.969 0 0 0 2.78-1.2.505.505 0 0 1 .3-.08H33.9c.08 0 .1.039.1.138v10.457c0 .1-.039.141-.119.141Z" />
            </svg>
        );
    },
);
