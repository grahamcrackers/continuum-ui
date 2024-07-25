import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const TableRowRemoveCenterIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M35.9 19a8.9 8.9 0 1 0-8.9 8.9 8.9 8.9 0 0 0 8.9-8.9Zm-3.9.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 .5.5Z" />
                <path d="M2 3v32a1 1 0 0 0 1 1h30a1 1 0 0 0 1-1v-5.893a12.139 12.139 0 0 1-2 1.123V34h-8v-3.084a12.139 12.139 0 0 1-2-.684V34h-8v-8h3.308a12.229 12.229 0 0 1-1.808-4H6v-6h9.5a12.229 12.229 0 0 1 1.809-4H14V4h8v3.769a12.154 12.154 0 0 1 2-.685V4h8v3.769a12.108 12.108 0 0 1 2 1.123V3a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1Zm10 23v8H4v-8Zm0-22v8H4V4Z" />
            </svg>
        );
    },
);
