import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const StopwatchIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M20 2h1a1 1 0 0 0 0-2h-4a1 1 0 0 0 0 2h1v2h2Z" />
                <path d="M19 4a14.94 14.94 0 0 0-9.9 3.729L7.437 6.062l.708-.707A1 1 0 1 0 6.73 3.941l-.707.707-1.414 1.414-.709.708a1 1 0 0 0 1.416 1.414l.707-.707 1.669 1.668A15 15 0 1 0 19 4Zm0 28a13 13 0 1 1 7.833-23.375l-8.925 8.925c-.021.021-.037.04-.057.062a1.858 1.858 0 1 0 2.619 2.635c.023-.021.046-.045.068-.067l8.913-8.912A13 13 0 0 1 19 32Z" />
            </svg>
        );
    },
);
