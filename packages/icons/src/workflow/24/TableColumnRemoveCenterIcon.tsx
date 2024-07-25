import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const TableColumnRemoveCenterIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M12.1 36A11.9 11.9 0 1 0 24 24.1 11.9 11.9 0 0 0 12.1 36Zm3.9-1.5a.5.5 0 0 1 .5-.5h15a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5h-15a.5.5 0 0 1-.5-.5Z" />
                <path d="M42 4H6a2 2 0 0 0-2 2v36a2 2 0 0 0 2 2h4.335a15.812 15.812 0 0 1-1.682-4H8v-8h.6a15.766 15.766 0 0 1 1.612-4H8v-8h6v3.545a15.827 15.827 0 0 1 6-3.017V10h8v10.528a15.827 15.827 0 0 1 6 3.017V20h6v8h-2.214a15.766 15.766 0 0 1 1.614 4h.6v8h-.653a15.812 15.812 0 0 1-1.682 4H42a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2ZM14 16H8V8h6Zm26 0h-6V8h6Z" />
            </svg>
        );
    },
);
