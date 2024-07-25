import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const UploadToCloudIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M26 32h-4v11a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1ZM37.5 17a7.392 7.392 0 0 0-.846.048A9.516 9.516 0 0 0 37 14.5 9.638 9.638 0 0 0 27.5 5c-5.125-.2-9.106 2.805-9.708 7.472A8.006 8.006 0 0 0 7.713 20.2a15.549 15.549 0 0 0 .557 2.867A4.5 4.5 0 1 0 7.5 32H22v-8h-6.2a.8.8 0 0 1-.8-.8.787.787 0 0 1 .2-.527l8.445-8.524a.5.5 0 0 1 .7 0l8.455 8.519a.787.787 0 0 1 .2.527.8.8 0 0 1-.8.8H26v8h11.5a7.5 7.5 0 0 0 0-15Z" />
            </svg>
        );
    },
);
