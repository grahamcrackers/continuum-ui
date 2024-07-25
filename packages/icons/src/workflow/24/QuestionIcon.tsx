import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const QuestionIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M42 4H6a2 2 0 0 0-2 2v26a2 2 0 0 0 2 2h12l5.571 9.285a.5.5 0 0 0 .858 0L30 34h11.994a2.005 2.005 0 0 0 2-2.006L44 6a2 2 0 0 0-2-2ZM24.244 32.415a3.446 3.446 0 0 1-3.638-3.641 3.5 3.5 0 0 1 3.638-3.6 3.5 3.5 0 0 1 3.641 3.6 3.411 3.411 0 0 1-3.641 3.641Zm4.117-15.159-.232.221c-.944.892-2.013 1.9-2.013 2.523a2.707 2.707 0 0 0 .4 1.4.809.809 0 0 1-.686 1.278h-2.812a1.269 1.269 0 0 1-.934-.364 4.273 4.273 0 0 1-.938-2.669c0-1.831 1.128-2.958 2.688-4.519 1.03-1.03 1.481-1.557 1.481-2.27 0-.355 0-1.3-2.071-1.3a7.615 7.615 0 0 0-3.773 1l-.244.1h-.159a.82.82 0 0 1-.83-.828V8.684a.956.956 0 0 1 .481-.917 10.931 10.931 0 0 1 5.236-1.212c4 0 6.686 2.31 6.686 5.749a6.4 6.4 0 0 1-2.28 4.952Z" />
            </svg>
        );
    },
);
