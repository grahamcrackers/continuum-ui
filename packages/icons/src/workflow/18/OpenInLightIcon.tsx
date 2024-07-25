import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const OpenInLightIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M4 15.5V4h28v26H18.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5H33a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v12.5a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5Z" />
                <path d="m5.54 18.853 3.389 3.39-7.546 7.546a.5.5 0 0 0 0 .707L3.5 32.617a.5.5 0 0 0 .707 0l7.546-7.546 3.389 3.389a.5.5 0 0 0 .858-.353V18H5.893a.5.5 0 0 0-.353.853Z" />
            </svg>
        );
    },
);
