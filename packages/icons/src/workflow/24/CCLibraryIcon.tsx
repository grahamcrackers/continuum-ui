import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const CCLibraryIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M43 10h-5V5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v32a1 1 0 0 0 1 1h5v5a1 1 0 0 0 1 1h32a1 1 0 0 0 1-1V11a1 1 0 0 0-1-1Zm-33 1v23H8V8h26v2H11a1 1 0 0 0-1 1Zm30 29H14V14h15v14l4-3.5 4 3.5V14h3Z" />
            </svg>
        );
    },
);
