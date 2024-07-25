import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const GraphDonutIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M20 2.728v7.19a.489.489 0 0 0 .353.466 7.96 7.96 0 0 1 0 15.234.489.489 0 0 0-.353.466v7.189a.513.513 0 0 0 .587.506 15.986 15.986 0 0 0 0-31.555.513.513 0 0 0-.587.504ZM12.959 11.827a8.036 8.036 0 0 1 2.69-1.444A.486.486 0 0 0 16 9.92V2.729a.514.514 0 0 0-.587-.506A15.977 15.977 0 0 0 6.3 7.111a.511.511 0 0 0 .1.767l5.98 3.982a.485.485 0 0 0 .579-.033ZM10 18a7.914 7.914 0 0 1 .333-2.275.486.486 0 0 0-.193-.551L4.168 11.2a.513.513 0 0 0-.748.206 15.989 15.989 0 0 0 11.993 22.371.513.513 0 0 0 .587-.506v-7.188a.489.489 0 0 0-.353-.466A7.977 7.977 0 0 1 10 18Z" />
            </svg>
        );
    },
);
