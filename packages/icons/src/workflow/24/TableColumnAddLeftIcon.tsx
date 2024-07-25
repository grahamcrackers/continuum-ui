import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const TableColumnAddLeftIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M12 24.1A11.9 11.9 0 1 0 23.9 36 11.9 11.9 0 0 0 12 24.1Zm8 13.4a.5.5 0 0 1-.5.5H14v5.5a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V38H4.5a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 .5-.5H10v-5.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5V34h5.5a.5.5 0 0 1 .5.5Z" />
                <path d="M42 4H6a2 2 0 0 0-2 2v16.275a15.8 15.8 0 0 1 16 0V20h8v8h-2.275a15.809 15.809 0 0 1 1.648 4H28v8h-.627a15.809 15.809 0 0 1-1.648 4H42a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2ZM28 16h-8V8h8Zm12 24h-8v-8h8Zm0-12h-8v-8h8Zm0-12h-8V8h8Z" />
            </svg>
        );
    },
);
