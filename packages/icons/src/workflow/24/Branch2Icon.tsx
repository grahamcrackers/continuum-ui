import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const Branch2Icon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M38 30a7.948 7.948 0 0 0-6.161 2.954l-13.983-7.531a7.121 7.121 0 0 0 0-2.846l13.983-7.531A7.958 7.958 0 1 0 30 10a7.987 7.987 0 0 0 .144 1.423L16.16 18.954a8 8 0 1 0 0 10.093l13.983 7.531A7.991 7.991 0 1 0 38 30Zm0-24.2a4.2 4.2 0 1 1-4.2 4.2A4.2 4.2 0 0 1 38 5.8Zm0 36.4a4.2 4.2 0 1 1 4.2-4.2 4.2 4.2 0 0 1-4.2 4.2Z" />
            </svg>
        );
    },
);
