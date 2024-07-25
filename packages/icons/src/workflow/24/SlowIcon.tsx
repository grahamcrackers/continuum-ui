import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const SlowIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M43.255 13.339a3.678 3.678 0 0 0-3.678 3.678 4.91 4.91 0 0 0 1.32 2.689l-6.23 11.955 1.017-13.5c1.185-.366 2.9-1.829 2.9-3.491a3.678 3.678 0 0 0-7.356 0 4.332 4.332 0 0 0 2.462 3.371l-.6 12.287-7.74.017a12.225 12.225 0 1 0-20.689-8.83c0 4.628 1.686 9.512 9.41 10.275C11.168 34.858 5.5 35.4 3.06 35.716 1.225 35.955 1.907 38 3.756 38h36.722c1.377 0 2.628-.823.142-2.365-.993-.616-1.175-1.859-1.721-2.549a5.385 5.385 0 0 0-2.164-1.807l5.777-10.822c.1.01.6.238.743.238a3.678 3.678 0 0 0 0-7.356Z" />
            </svg>
        );
    },
);
