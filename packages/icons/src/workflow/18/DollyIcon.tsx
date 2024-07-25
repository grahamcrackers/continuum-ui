import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const DollyIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M30.841 24H24L20.364 8h5.584a.375.375 0 0 0 .237-.666L18 .65 9.815 7.334a.375.375 0 0 0 .237.666h5.584L12 24H5.159a.75.75 0 0 0-.465 1.338L18 35.85l13.306-10.512A.75.75 0 0 0 30.841 24Z" />
            </svg>
        );
    },
);
