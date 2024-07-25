import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const FolderSearchIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M16 6H2V3.5A1.5 1.5 0 0 1 3.5 2h7.672a2 2 0 0 1 1.414.586ZM11.223 22.734A11.58 11.58 0 0 1 34 19.779V9a1 1 0 0 0-1-1H2v21a1 1 0 0 0 1 1h10.793a11.526 11.526 0 0 1-2.57-7.266Z" />
                <path d="m35.385 32.269-4.917-4.917a9.065 9.065 0 1 0-3.049 3.048l4.917 4.917a2.044 2.044 0 0 0 3.048 0 2.2 2.2 0 0 0 .001-3.048Zm-18.15-9.534A5.568 5.568 0 1 1 22.8 28.3a5.568 5.568 0 0 1-5.566-5.565Z" />
            </svg>
        );
    },
);
