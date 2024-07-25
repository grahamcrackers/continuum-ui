import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const SnapshotIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M33.974 42.88v.059A1.062 1.062 0 0 1 32.912 44H1.084a1.064 1.064 0 0 1-1-1.119C.784 35.249 8.608 32.652 11 32.44c1.751-.153 1.778-1.56 1.778-3.315a15.973 15.973 0 0 1-3.752-9.518c0-5.765 3.281-9.607 8-9.607s8 3.842 8 9.607a15.968 15.968 0 0 1-3.753 9.518c0 1.755.028 3.162 1.775 3.315 2.399.208 10.223 2.809 10.926 10.44ZM32.5 10h15a.5.5 0 0 0 .5-.5v-5a.5.5 0 0 0-.5-.5h-15a.5.5 0 0 0-.5.5V6h-2a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2v1.5a.5.5 0 0 0 .5.5h15a.5.5 0 0 0 .5-.5v-5a.5.5 0 0 0-.5-.5h-15a.5.5 0 0 0-.5.5V14h-2V8h2v1.5a.5.5 0 0 0 .5.5Z" />
            </svg>
        );
    },
);
