import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const ReplyIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M15.029 10H14V4.8a.8.8 0 0 0-.806-.8.785.785 0 0 0-.56.236L2.207 15.464a.8.8 0 0 0 0 1.072l10.427 11.228a.785.785 0 0 0 .56.236.8.8 0 0 0 .806-.8V22a19.71 19.71 0 0 1 18.791 6.81.67.67 0 0 0 1.209-.4C34 25.453 30.732 10 15.029 10Z" />
            </svg>
        );
    },
);
