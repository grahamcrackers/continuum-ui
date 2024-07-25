import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const DeviceTVIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M44 14H25.414l9.107-9.107a1.8 1.8 0 0 0-.016-2.421 1.787 1.787 0 0 0-2.4.007L24 10.586 15.909 2.5a1.783 1.783 0 0 0-2.4 0 1.8 1.8 0 0 0-.01 2.414L22.586 14H4a2 2 0 0 0-2 2v26a2 2 0 0 0 2 2h40a2 2 0 0 0 2-2V16a2 2 0 0 0-2-2Zm-6 26H6V18h32Zm6-2a2 2 0 0 1-4 0v-2.128a2 2 0 0 1 4 0Z" />
            </svg>
        );
    },
);
