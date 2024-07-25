import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const LabelIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="m35.293 19.292-17-17A1 1 0 0 0 17.586 2H3a1 1 0 0 0-1 1v14.585a1 1 0 0 0 .293.708l17 17a1 1 0 0 0 1.414 0l14.586-14.586a1 1 0 0 0 0-1.415ZM8 10.6A2.6 2.6 0 1 1 10.6 8 2.6 2.6 0 0 1 8 10.6Z" />
            </svg>
        );
    },
);
