import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const VolumeOneIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M6.745 12.073H1a1 1 0 0 0-1 1V23a1 1 0 0 0 1 1h5.745a1.428 1.428 0 0 1 .931.345l7.13 7.259A.727.727 0 0 0 16 31.029V5a.726.726 0 0 0-1.194-.571l-7.127 7.3a1.44 1.44 0 0 1-.934.344ZM22.04 18a6.935 6.935 0 0 1-1.407 4.192.98.98 0 0 0 .086 1.288l.016.016a.992.992 0 0 0 1.487-.09 8.955 8.955 0 0 0-.022-10.853.992.992 0 0 0-1.484-.087l-.015.016a.982.982 0 0 0-.085 1.292A6.943 6.943 0 0 1 22.04 18Z" />
            </svg>
        );
    },
);
