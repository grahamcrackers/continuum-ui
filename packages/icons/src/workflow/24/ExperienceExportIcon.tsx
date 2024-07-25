import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const ExperienceExportIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M40 38H16v-4h8v-4h-8v-4h8v-4H4V10h36V8a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v32a2 2 0 0 0 2 2h36a2 2 0 0 0 2-2Zm-28 0H4V26h8Z" />
                <path d="M36 20v-5.341a.5.5 0 0 1 .864-.343L46.548 24l-9.685 9.684a.5.5 0 0 1-.863-.343V28h-7a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1Z" />
            </svg>
        );
    },
);
