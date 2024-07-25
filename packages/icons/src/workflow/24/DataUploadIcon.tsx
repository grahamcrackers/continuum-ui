import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const DataUploadIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <ellipse cx="24" cy="10.25" rx="20" ry="6.25" />
                <path d="M26 40h-4.414a3 3 0 0 1-2.122-5.121l2.76-2.76C15.831 31.877 6.037 30.382 4 27.152v10.6C4 41.2 12.954 44 24 44q1.013 0 2-.031ZM42.2 24.546a3.387 3.387 0 0 0 1.8-2.578V15.5c-1.315 1.663-4.06 2.819-7.248 3.6ZM26.163 28.18l8.669-8.669A60.9 60.9 0 0 1 24 20.5c-6.17 0-17.765-1.461-20-5.006v6.471c0 3.451 8.954 6.25 20 6.25.731.003 1.452-.015 2.163-.035ZM47.146 35.146a.5.5 0 0 1-.353.854H42v12H30V36h-4.793a.5.5 0 0 1-.353-.854L36 24Z" />
            </svg>
        );
    },
);
