import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const BidRuleIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="m18 12 6-6 5.999 6-6 6z" />
                <rect
                    height="3.155"
                    rx=".789"
                    ry=".789"
                    transform="rotate(-44.995 30.008 18.01)"
                    width="12.619"
                    x="23.7"
                    y="16.432"
                />
                <rect
                    height="3.155"
                    rx=".789"
                    ry=".789"
                    transform="rotate(-44.995 18.023 6.023)"
                    width="12.619"
                    x="11.713"
                    y="4.445"
                />
                <path d="m4.06 34.06-2.12-2.12a1.5 1.5 0 0 1 0-2.122L18 15l3 3L6.182 34.06a1.5 1.5 0 0 1-2.122 0ZM34 30v-1a1 1 0 0 0-1-1H23a1 1 0 0 0-1 1v1h-1.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h15a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5Z" />
            </svg>
        );
    },
);
