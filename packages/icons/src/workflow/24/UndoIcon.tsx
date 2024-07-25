import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const UndoIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M43.994 26.6C43.781 19.485 37.573 14 30.455 14H14V8a1 1 0 0 0-1.707-.7l-9.147 9.346a.5.5 0 0 0 0 .708l9.147 9.353A1 1 0 0 0 14 26v-6h16.6a7.267 7.267 0 0 1 7.386 6.624A7 7 0 0 1 31 34h-8a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h8a13 13 0 0 0 12.994-13.4Z" />
            </svg>
        );
    },
);
