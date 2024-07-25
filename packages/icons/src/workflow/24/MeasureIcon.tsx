import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const MeasureIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="m42.385 19.757-9.546-9.546a.5.5 0 0 0-.707 0l-2.122 2.122a.5.5 0 0 0 0 .707l9.546 9.546-7.071 7.071-5.3-5.3a.5.5 0 0 0-.707 0l-2.121 2.122a.5.5 0 0 0 0 .707l5.3 5.3-7.071 7.071-9.546-9.547a.5.5 0 0 0-.707 0l-2.122 2.122a.5.5 0 0 0 0 .707l9.546 9.546-4.242 4.242a2 2 0 0 1-2.829 0L1.373 35.314a2 2 0 0 1 0-2.829L32.485 1.372a2 2 0 0 1 2.829 0l11.313 11.314a2 2 0 0 1 0 2.829Z" />
            </svg>
        );
    },
);
