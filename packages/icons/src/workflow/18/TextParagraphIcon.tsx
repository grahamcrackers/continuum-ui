import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const TextParagraphIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M13.4 4c-4.5 0-8.919 3.623-9.354 8.105A9.009 9.009 0 0 0 13 22c1.05 0 3-.075 3-.075V33.5a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5V7h6v26.5a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5V5a1 1 0 0 0-1-1Z" />
            </svg>
        );
    },
);
