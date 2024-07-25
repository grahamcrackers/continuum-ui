import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const FolderSearchIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M18.1 4.8a2 2 0 0 0-1.6-.8H6a2 2 0 0 0-2 2v4h18ZM17.617 31.781A14 14 0 0 1 44 25.256V16a2 2 0 0 0-2-2H4v26a2 2 0 0 0 2 2h16.059a13.963 13.963 0 0 1-4.442-10.219Z" />
                <path d="m47.315 44.084-7.161-7.161a10.1 10.1 0 1 0-3.394 3.394l7.161 7.161c.469.469 2.5.89 3.395 0a2.444 2.444 0 0 0-.001-3.394Zm-21.9-12.3a6.2 6.2 0 1 1 6.2 6.2 6.2 6.2 0 0 1-6.198-6.202Z" />
            </svg>
        );
    },
);
