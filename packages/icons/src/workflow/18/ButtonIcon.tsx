import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const ButtonIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M26 8H10a10 10 0 0 0 0 20h16a10 10 0 0 0 0-20Zm0 18.1H10a8.1 8.1 0 0 1 0-16.2h16a8.1 8.1 0 0 1 0 16.2Z" />
                <path d="M26 12.1H10a5.9 5.9 0 0 0 0 11.8h16a5.9 5.9 0 0 0 0-11.8Z" />
            </svg>
        );
    },
);
