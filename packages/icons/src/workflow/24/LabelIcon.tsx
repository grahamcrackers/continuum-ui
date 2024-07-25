import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const LabelIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M43.4 24.669 23.318 4.586A2 2 0 0 0 21.9 4H6a2 2 0 0 0-2 2v15.9a2 2 0 0 0 .586 1.414L24.68 43.413a2 2 0 0 0 2.829 0L43.4 27.5a2 2 0 0 0 0-2.831ZM12 15.5a3.5 3.5 0 1 1 3.5-3.5 3.5 3.5 0 0 1-3.5 3.5Z" />
            </svg>
        );
    },
);
