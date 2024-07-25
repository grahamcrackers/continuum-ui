import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const OnAirIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M21.812 18.678a.5.5 0 0 0-.107.678l.574.823a.5.5 0 0 0 .716.115 8 8 0 1 0-9.971.015.5.5 0 0 0 .718-.117l.571-.824a.5.5 0 0 0-.109-.679 6 6 0 0 1 5.26-10.471 5.913 5.913 0 0 1 3.991 3.3 6.02 6.02 0 0 1-1.643 7.16Z" />
                <path d="M16.419 1.094a13 13 0 0 0-6.244 23.288.508.508 0 0 0 .717-.122l.569-.821a.5.5 0 0 0-.116-.681 11 11 0 1 1 13.337-.019.5.5 0 0 0-.115.68l.573.821a.506.506 0 0 0 .715.119 13 13 0 0 0-9.436-23.265Z" />
                <path d="M19.4 17.2a3.5 3.5 0 1 0-2.809 0L11.75 33.356a.5.5 0 0 0 .479.644h1.043a.5.5 0 0 0 .479-.356L15.443 28h5.113l1.693 5.644a.5.5 0 0 0 .479.356h1.043a.5.5 0 0 0 .479-.644ZM16 14a2 2 0 1 1 2 2 2 2 0 0 1-2-2Zm.043 12L18 19.477 19.957 26Z" />
            </svg>
        );
    },
);
