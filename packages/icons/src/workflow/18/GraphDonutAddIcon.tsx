import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const GraphDonutAddIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M3.42 11.408a15.991 15.991 0 0 0 11.993 22.369.513.513 0 0 0 .587-.506v-.791a11.936 11.936 0 0 1-1.168-7.187 7.922 7.922 0 0 1-4.5-9.567.485.485 0 0 0-.192-.551L4.168 11.2a.514.514 0 0 0-.748.208ZM12.959 11.826a8.044 8.044 0 0 1 2.689-1.443A.486.486 0 0 0 16 9.92V2.729a.514.514 0 0 0-.588-.506A15.977 15.977 0 0 0 6.3 7.111a.511.511 0 0 0 .1.767l5.987 3.982a.484.484 0 0 0 .572-.034ZM25.314 14.829a12.044 12.044 0 0 1 8.633 2.024 15.988 15.988 0 0 0-13.36-14.631.513.513 0 0 0-.587.507v7.188a.488.488 0 0 0 .354.465 8.013 8.013 0 0 1 4.96 4.447ZM27 35.9a8.9 8.9 0 1 0-8.9-8.9 8.9 8.9 0 0 0 8.9 8.9Zm-5-9.4a.5.5 0 0 1 .5-.5H26v-3.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5V26h3.5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H28v3.5a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5V28h-3.5a.5.5 0 0 1-.5-.5Z" />
            </svg>
        );
    },
);
