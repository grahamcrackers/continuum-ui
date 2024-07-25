import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const ExportOriginalIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M12 21v-6a1 1 0 0 1 1-1h13V5a1 1 0 0 0-1-1H1a1 1 0 0 0-1 1v26a1 1 0 0 0 1 1h24a1 1 0 0 0 1-1v-9H13a1 1 0 0 1-1-1Z" />
                <path d="M28 11.207V16H14.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5H28v4.793a.5.5 0 0 0 .854.353L35.913 18l-7.059-7.146a.5.5 0 0 0-.854.353Z" />
            </svg>
        );
    },
);
