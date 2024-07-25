import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const LinkIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M42.357 5.643a11.07 11.07 0 0 0-15.657 0c-.594.594-3.806 3.741-5.483 5.418a12.808 12.808 0 0 1 5.774.939c.8-.8 2.733-2.668 3.064-3A6.326 6.326 0 1 1 39 17.945l-8.2 8.2c-2.471 2.471-6.905 2.76-9.376.29a6.418 6.418 0 0 1-1.915-2.508 3.151 3.151 0 0 0-.659.49l-2.523 2.642a11 11 0 0 0 1.892 2.581c4.324 4.323 12.149 3.648 16.472-.676l7.666-7.664a11.07 11.07 0 0 0 0-15.657Z" />
                <path d="M20.8 36.072c-.8.8-2.524 2.6-2.855 2.93A6.326 6.326 0 0 1 9 30.055l8.214-8.214c2.471-2.471 6.855-2.75 9.325-.279a6.069 6.069 0 0 1 1.706 2.577 3.125 3.125 0 0 0 .659-.49l2.677-2.655a10.983 10.983 0 0 0-1.893-2.581 11.279 11.279 0 0 0-15.829.073L5.643 26.7A11.071 11.071 0 0 0 21.3 42.357c.594-.594 3.6-3.672 5.274-5.348a12.825 12.825 0 0 1-5.774-.937Z" />
            </svg>
        );
    },
);
