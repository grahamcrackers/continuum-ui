import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const UploadToCloudIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M16 33a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-9h-4ZM29.572 11.143a6.449 6.449 0 0 0-.726.041 8.144 8.144 0 1 0-15.922-3.236 6.862 6.862 0 0 0-8.407 8.394A3.857 3.857 0 1 0 3.857 24H16v-6h-4.3a.7.7 0 0 1-.7-.7.685.685 0 0 1 .207-.49l6.468-5.685a.5.5 0 0 1 .65 0l6.468 5.685a.685.685 0 0 1 .207.49.7.7 0 0 1-.7.7H20v6h9.572a6.429 6.429 0 0 0 0-12.857Z" />
            </svg>
        );
    },
);
