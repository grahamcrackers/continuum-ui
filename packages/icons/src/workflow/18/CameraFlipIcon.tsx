import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const CameraFlipIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M33 8h-7.05L22.6 4.326A1 1 0 0 0 21.859 4h-9.718a1 1 0 0 0-.739.326L8.05 8H1a1 1 0 0 0-1 1v20a1 1 0 0 0 1 1h32a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1ZM17 26.2a8.141 8.141 0 0 1-5.782-2.418l-1.365 1.365A.5.5 0 0 1 9 24.793V20.5a.5.5 0 0 1 .5-.5h4.293a.5.5 0 0 1 .353.854l-1.364 1.364A5.907 5.907 0 0 0 17 24a5.985 5.985 0 0 0 5.51-3.688.5.5 0 0 1 .455-.312h1.291a.5.5 0 0 1 .48.643A8.178 8.178 0 0 1 17 26.2Zm8-10.7a.5.5 0 0 1-.5.5h-4.293a.5.5 0 0 1-.354-.853l1.365-1.365A5.907 5.907 0 0 0 17 12a5.986 5.986 0 0 0-5.51 3.688.5.5 0 0 1-.455.312H9.744a.5.5 0 0 1-.48-.642 8.148 8.148 0 0 1 13.518-3.14l1.364-1.364a.5.5 0 0 1 .854.353Z" />
            </svg>
        );
    },
);
