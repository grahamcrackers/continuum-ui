import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const RotateCWBoldIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M24 3.9a19.9 19.9 0 0 1 15.444 7.366l4.9-3.176a.8.8 0 0 1 1.11.239.788.788 0 0 1 .116.553L43.119 20.63a.5.5 0 0 1-.588.382l-11.724-2.559a.785.785 0 0 1-.458-.331.8.8 0 0 1 .235-1.111l5.478-3.552A15.97 15.97 0 1 0 38.3 31.05l.015.008a1.976 1.976 0 0 1 1.722-1.042 2 2 0 0 1 2 2 1.969 1.969 0 0 1-.18.812l.018.009A19.993 19.993 0 1 1 24 3.9Z" />
            </svg>
        );
    },
);
