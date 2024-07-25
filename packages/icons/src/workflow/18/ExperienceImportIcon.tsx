import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const ExperienceImportIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M6 14v-3.328a.5.5 0 0 1 .866-.341L14 18l-7.134 7.669A.5.5 0 0 1 6 25.328V22H1a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1Z" />
                <path d="M35 4H5a1 1 0 0 0-1 1v3h28v8H16v12H4v3a1 1 0 0 0 1 1h30a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1Zm-3 24H18v-4h14Zm0-6H18v-4h14Z" />
            </svg>
        );
    },
);
