import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const ArtboardIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M8 9v24a1 1 0 0 0 1 1h24a1 1 0 0 0 1-1V14.914a1 1 0 0 0-.293-.707l-5.914-5.914A1 1 0 0 0 27.086 8H9a1 1 0 0 0-1 1Zm24 23H10V10h16v5a1 1 0 0 0 1 1h5ZM8 0h2v6H8zM0 8h6v2H0z" />
            </svg>
        );
    },
);
