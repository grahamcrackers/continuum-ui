import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const TextSuperscriptIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M34 6H4a2 2 0 0 0-2 2v7a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-5h10v28h-3a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1h-3V10h10v5a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V8a2 2 0 0 0-2-2ZM42.33 16c-.2 0-.26-.047-.26-.17V5.765a6.136 6.136 0 0 1-2.585 1c-.193.023-.257 0-.257-.147V4.144c0-.122.032-.17.194-.193a8.5 8.5 0 0 0 3.689-1.81 1.058 1.058 0 0 1 .486-.1h2.241c.13 0 .162.047.162.167V15.83c0 .123-.063.17-.194.17Z" />
            </svg>
        );
    },
);
