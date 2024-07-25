import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const TableColumnRemoveCenterIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M8.1 27a8.9 8.9 0 1 0 8.9-8.9A8.9 8.9 0 0 0 8.1 27Zm3.9-.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5Z" />
                <path d="M33 2H1a1 1 0 0 0-1 1v30a1 1 0 0 0 1 1h5.893a12.139 12.139 0 0 1-1.123-2H2v-8h3.084a12.139 12.139 0 0 1 .684-2H2v-8h8v3.308a12.229 12.229 0 0 1 4-1.808V6h6v9.5a12.229 12.229 0 0 1 4 1.809V14h8v8h-3.768a12.139 12.139 0 0 1 .684 2H32v8h-3.769a12.139 12.139 0 0 1-1.123 2H33a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1ZM10 12H2V4h8Zm22 0h-8V4h8Z" />
            </svg>
        );
    },
);
