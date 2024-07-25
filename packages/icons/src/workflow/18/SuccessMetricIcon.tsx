import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const SuccessMetricIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <rect height="8" rx="1" ry="1" width="8" x="4" y="26" />
                <rect height="24" rx="1" ry="1" width="8" x="14" y="10" />
                <rect height="12" rx="1" ry="1" width="8" x="24" y="22" />
                <path d="M12 16H6.5a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5H12ZM7.768 6.27 12 8.979l-1.078 1.684-4.233-2.709a.5.5 0 0 1-.152-.691l.539-.842a.5.5 0 0 1 .692-.151ZM16.63 8l-1.9-5.971a.25.25 0 0 0-.314-.163l-1.43.454a.25.25 0 0 0-.163.314L14.532 8ZM24 16h5.5a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5H24ZM28.232 6.27 24 8.979l1.078 1.684 4.233-2.709a.5.5 0 0 0 .152-.691l-.539-.842a.5.5 0 0 0-.692-.151ZM19.37 8l1.9-5.971a.25.25 0 0 1 .314-.163l1.43.454a.25.25 0 0 1 .163.314L21.468 8Z" />
            </svg>
        );
    },
);
