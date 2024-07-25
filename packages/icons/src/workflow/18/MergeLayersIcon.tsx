import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const MergeLayersIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M32.62 23.319 24.479 18l8.134-5.315a.8.8 0 0 0 .007-1.366L18.629 2.178a1.2 1.2 0 0 0-1.258 0l-13.99 9.141a.8.8 0 0 0 0 1.362L11.521 18l-8.14 5.319a.8.8 0 0 0 0 1.362l13.99 9.141a1.2 1.2 0 0 0 1.249.006l13.993-9.143a.8.8 0 0 0 .007-1.366Zm-8.856 2.047-5.451 5.524a.5.5 0 0 1-.626 0l-5.451-5.524a.785.785 0 0 1-.236-.56.8.8 0 0 1 .8-.806h3.7v-5.836L7.318 12 18 4.829 28.682 12 19.5 18.164V24h3.7a.8.8 0 0 1 .8.806.785.785 0 0 1-.236.56Z" />
            </svg>
        );
    },
);
