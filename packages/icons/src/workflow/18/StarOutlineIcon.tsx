import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const StarOutlineIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="m18.059 5.082 3.554 9.5 10.219.481-7.974 6.4 2.671 9.837-8.535-5.568-8.557 5.615 2.7-9.873-7.974-6.4 10.2-.489Zm.023-4.259a.737.737 0 0 0-.7.479l-4.411 11.349-12.2.586a.75.75 0 0 0-.433 1.334l9.523 7.642-3.229 11.8a.752.752 0 0 0 .724.951.74.74 0 0 0 .41-.126L18 28.122l10.187 6.648a.742.742 0 0 0 .408.125.752.752 0 0 0 .725-.95l-3.189-11.732 9.528-7.653a.75.75 0 0 0-.434-1.334l-12.2-.575-4.24-11.34a.738.738 0 0 0-.703-.488Z" />
            </svg>
        );
    },
);
