import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const VisibilityIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M32.817 11.44A19.969 19.969 0 0 0 24 9.249c-11.552 0-21 11.5-21 15.231 0 4 9.944 14.271 20.915 14.271C34.975 38.751 45 28.477 45 24.48c0-3.152-5.619-9.788-12.183-13.04ZM24 36.3A12.3 12.3 0 1 1 36.3 24 12.3 12.3 0 0 1 24 36.3Z" />
                <path d="M27.556 24.111A3.556 3.556 0 0 1 24 20.555a3.506 3.506 0 0 1 1.8-3.025 6.523 6.523 0 0 0-1.8-.28A6.75 6.75 0 1 0 30.75 24a6.264 6.264 0 0 0-.233-1.594 3.5 3.5 0 0 1-2.961 1.705Z" />
            </svg>
        );
    },
);
