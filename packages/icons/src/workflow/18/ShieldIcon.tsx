import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const ShieldIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M30 3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v13.1a15.608 15.608 0 0 0 5.857 12.187l5.674 4.355a.7.7 0 0 0 .937 0l5.674-4.355A15.608 15.608 0 0 0 30 16.1ZM9.722 22.287A14.482 14.482 0 0 1 8 16V4h20Z" />
            </svg>
        );
    },
);
