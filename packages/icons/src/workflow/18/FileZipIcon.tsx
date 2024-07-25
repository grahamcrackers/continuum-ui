import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const FileZipIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M20 2v10h10L20 2z" />
                <path d="M19 14a1 1 0 0 1-1-1V2h-4v15.5a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5V2H7a1 1 0 0 0-1 1v30a1 1 0 0 0 1 1h5v-3.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5V34h15a1 1 0 0 0 1-1V14Zm-1 13a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1V17a1 1 0 0 1 1-1h1v4h6v-4h1a1 1 0 0 1 1 1Z" />
                <circle cx="13" cy="24" r="2.186" />
            </svg>
        );
    },
);
