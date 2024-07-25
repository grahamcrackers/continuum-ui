import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const MergeLayersIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M43.635 32.328 31.6 24l12.036-8.328a.8.8 0 0 0 0-1.344L24.652 1.193a1.2 1.2 0 0 0-1.3 0L4.365 14.328a.8.8 0 0 0 0 1.344L16.4 24 4.365 32.328a.8.8 0 0 0 0 1.344l18.983 13.135a1.2 1.2 0 0 0 1.3 0l18.987-13.135a.8.8 0 0 0 0-1.344Zm-12.871 1.038-6.386 6.488a.5.5 0 0 1-.707 0l-6.435-6.488a.785.785 0 0 1-.236-.56.8.8 0 0 1 .8-.806H22v-8.97L11 15l13-9.513L37 15l-11 8.03V32h4.2a.8.8 0 0 1 .8.806.785.785 0 0 1-.236.56Z" />
            </svg>
        );
    },
);
