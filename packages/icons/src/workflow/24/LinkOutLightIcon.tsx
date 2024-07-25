import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const LinkOutLightIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M40 24.5V38H8V8h15.5a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5H5a1 1 0 0 0-1 1v36a1 1 0 0 0 1 1h38a1 1 0 0 0 1-1V24.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5Z" />
                <path d="M30.241 4a1.008 1.008 0 0 0-.655 1.716l4.228 4.228-9.842 9.842a.5.5 0 0 0 0 .707l3.535 3.535a.5.5 0 0 0 .707 0l9.842-9.842 4.218 4.214a1 1 0 0 0 1.706-.655V4Z" />
            </svg>
        );
    },
);
