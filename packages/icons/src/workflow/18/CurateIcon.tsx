import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const CurateIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M35 4H1a1 1 0 0 0-1 1v26a1 1 0 0 0 1 1h34a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1Zm-1 26H2v-6h9.663a3.477 3.477 0 0 0 6.674 0h1.326a3.477 3.477 0 0 0 6.674 0H34Zm0-8h-7.663a3.477 3.477 0 0 0-6.674 0h-1.326a3.477 3.477 0 0 0-6.674 0H2v-8h1.663a3.477 3.477 0 0 0 6.674 0h1.326a3.477 3.477 0 0 0 6.674 0h7.326a3.477 3.477 0 0 0 6.674 0H34Zm0-10h-1.663a3.477 3.477 0 0 0-6.674 0h-7.326a3.477 3.477 0 0 0-6.674 0h-1.326a3.477 3.477 0 0 0-6.674 0H2V6h32Z" />
            </svg>
        );
    },
);
