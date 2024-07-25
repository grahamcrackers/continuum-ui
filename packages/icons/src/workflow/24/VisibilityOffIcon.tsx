import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const VisibilityOffIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M44.457 41.628 29.971 27.143A6.713 6.713 0 0 0 30.75 24a6.264 6.264 0 0 0-.233-1.594 3.5 3.5 0 0 1-2.961 1.705A3.556 3.556 0 0 1 24 20.555a3.506 3.506 0 0 1 1.8-3.025 6.523 6.523 0 0 0-1.8-.28 6.713 6.713 0 0 0-3.143.779L6.122 3.293a1 1 0 0 0-1.415 0L3.293 4.707a1 1 0 0 0 0 1.414l7.8 7.8C6.176 17.55 3 22.318 3 24.48c0 4 9.944 14.271 20.915 14.271a21.842 21.842 0 0 0 9.6-2.412l8.117 8.118a1 1 0 0 0 1.414 0l1.414-1.414a1 1 0 0 0-.003-1.415ZM24 36.3a12.282 12.282 0 0 1-9.986-19.458l4.015 4.014a6.747 6.747 0 0 0 9.115 9.115l4.014 4.015A12.207 12.207 0 0 1 24 36.3ZM20.631 12.179a12.274 12.274 0 0 1 15.19 15.19l4.379 4.383c2.961-2.709 4.8-5.564 4.8-7.272 0-3.152-5.619-9.788-12.183-13.04A19.969 19.969 0 0 0 24 9.249a18.723 18.723 0 0 0-5.458.841Z" />
            </svg>
        );
    },
);
