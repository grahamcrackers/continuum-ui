import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const ArchiveRemoveIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <rect height="6" rx="1" ry="1" width="32" y="2" />
                <path d="M27 18.1a8.85 8.85 0 1 0 0 17.7 8.85 8.85 0 0 0 0-17.7Zm5 9.4a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 .5.5Z" />
                <path d="M16.893 20H11a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v.769a12.109 12.109 0 0 1 8-.685V10H2v15a1 1 0 0 0 1 1h11.75a12.216 12.216 0 0 1 2.143-6Z" />
            </svg>
        );
    },
);
