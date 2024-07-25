import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const DevicePhoneRefreshIcon = React.forwardRef<SVGSVGElement, IconProps>(
    ({ className, size, focusable = false, hidden = true, color = "currentColor", ...props }, forwardedRef) => {
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="36"
                viewBox="0 0 36 36"
                className={iconVariants({ size, className })}
                focusable={focusable}
                aria-hidden={hidden}
                {...props}
                ref={forwardedRef}
            >
                <path d="M18.4 24.452a8.883 8.883 0 0 1 15.5-3.091l1.25-1.25a.491.491 0 0 1 .35-.148.5.5 0 0 1 .5.5v5a.5.5 0 0 1-.5.5h-5a.5.5 0 0 1-.5-.5.489.489 0 0 1 .147-.35l1.74-1.74a6.056 6.056 0 0 0-10.6 1.436.976.976 0 0 1-.921.62h-1.248a.76.76 0 0 1-.718-.977ZM35.6 29.511A8.883 8.883 0 0 1 20.1 32.6l-1.25 1.251a.494.494 0 0 1-.35.149.5.5 0 0 1-.5-.5v-5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 .5.5.49.49 0 0 1-.147.35l-1.74 1.739a6.056 6.056 0 0 0 10.6-1.436.977.977 0 0 1 .921-.62h1.251a.76.76 0 0 1 .715.978Z" />
                <path d="M16 30H8V6h16v9.347a11.4 11.4 0 0 1 2-.416V2a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v32a2 2 0 0 0 2 2h8ZM15 2h2a1.04 1.04 0 0 1 1 1 1.04 1.04 0 0 1-1 1h-2a1.024 1.024 0 0 1-1-1 1.024 1.024 0 0 1 1-1Z" />
            </svg>
        );
    },
);
