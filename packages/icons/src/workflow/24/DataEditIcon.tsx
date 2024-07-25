import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const DataEditIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M23.056 37.9a4.835 4.835 0 0 1 1.17-1.906L28.216 32a61.163 61.163 0 0 1-4.216.156c-6.17 0-17.765-1.461-20-5.005v10.6c0 3.129 7.365 5.713 16.968 6.171ZM32.616 27.6l6.058-6.058a5.146 5.146 0 0 1 3.548-1.5h.062A5.011 5.011 0 0 1 44 20.36V15.5c-3.059 3.865-13.83 5-20 5s-17.765-1.458-20-5v6.471c0 3.451 8.954 6.25 20 6.25a58.671 58.671 0 0 0 8.616-.621ZM47.668 29.01l-4.68-4.68a.987.987 0 0 0-.7-.287h-.031a1.112 1.112 0 0 0-.753.33L27.055 38.82a.812.812 0 0 0-.2.342l-2.813 8.112c-.092.306.373.69.636.69a.221.221 0 0 0 .05-.005c.224-.052 6.944-2.461 8.117-2.814a.8.8 0 0 0 .336-.2L47.624 30.5a1.115 1.115 0 0 0 .328-.717.992.992 0 0 0-.284-.773ZM32.18 43.645c-1.754.527-4.5 1.747-6.02 2.2l2.189-6.022Z" />
            </svg>
        );
    },
);
