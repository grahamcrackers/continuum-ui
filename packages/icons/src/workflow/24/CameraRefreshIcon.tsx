import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const CameraRefreshIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M20.21 34a17.441 17.441 0 0 1 .519-2.185 11.3 11.3 0 1 1 14.522-11.779c.25-.012.5-.036.749-.036a15.3 15.3 0 0 1 8.284 2.418L46 20.665V10a2 2 0 0 0-2-2h-6.75a2 2 0 0 1-1.664-.891l-4.993-4.218A2 2 0 0 0 28.929 2H19.07a2 2 0 0 0-1.664.891l-4.867 4.218A2 2 0 0 1 10.875 8H4a2 2 0 0 0-2 2v26a2 2 0 0 0 2 2h16.02c.052-2.526.19-4 .19-4ZM44.885 36A9.109 9.109 0 0 1 36 44.508a8.114 8.114 0 0 1-6.17-2.667L33.663 38H24.1v9.583l3.446-3.453A11.545 11.545 0 0 0 36 47.9c6.327 0 11.483-5.256 11.9-11.9Z" />
                <path d="M42.267 30.189 38.535 34H47.9v-9.563l-3.4 3.477A11.469 11.469 0 0 0 36 24.1c-6.327 0-11.483 5.256-11.9 11.9h3.015A9.109 9.109 0 0 1 36 27.491a8.691 8.691 0 0 1 6.267 2.698ZM30.986 20.866a6.994 6.994 0 1 0-8.486 6.963 16.268 16.268 0 0 1 8.486-6.963Z" />
            </svg>
        );
    },
);
