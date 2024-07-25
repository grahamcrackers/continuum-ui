import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const StadiumIcon = React.forwardRef<SVGSVGElement, IconProps>(
    ({ className, size, focusable = false, hidden = true, color = "currentColor", ...props }, forwardedRef) => {
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 48 48"
                className={iconVariants({ size, className })}
                focusable={focusable}
                aria-hidden={hidden}
                {...props}
                ref={forwardedRef}
            >
                <path d="M47 18.621c-3.596-3.069-13.416-4.396-21-4.592V9.25l4.752-1.782a.5.5 0 0 0 0-.936L26 4.75V4.5a.5.5 0 0 0-.5-.5h-1a.47.47 0 0 0-.238.098A.47.47 0 0 0 24 4.5V14a80.737 80.737 0 0 0-8 .413V7.25l4.752-1.782a.5.5 0 0 0 0-.936L16 2.75V2.5a.5.5 0 0 0-.5-.5h-1a.47.47 0 0 0-.238.098A.47.47 0 0 0 14 2.5v12.141a49.664 49.664 0 0 0-8 1.63V11.25l4.752-1.782a.5.5 0 0 0 0-.936L6 6.75V6.5a.5.5 0 0 0-.5-.5h-1a.47.47 0 0 0-.238.098A.47.47 0 0 0 4 6.5v10.475a10.974 10.974 0 0 0-2.887 1.62A3.296 3.296 0 0 0 0 21.136v17.575c0 2.428 7.296 4.474 17.279 5.123a1.339 1.339 0 0 0 1.42-1.33v-4.447c0-1.337.69-2.017 1.541-2.017h7.6a1.542 1.542 0 0 1 1.543 1.542v4.913a1.347 1.347 0 0 0 1.429 1.339C40.79 43.185 48 41.139 48 38.712V21.097a3.16 3.16 0 0 0-1-2.476Zm-2.597 3.303c-2.523 1.628-9.318 3.915-20.362 3.915-11.036 0-17.83-2.284-20.357-3.911a.814.814 0 0 1 .037-1.326c2.07-1.292 7.936-3.924 20.279-3.93v.013l.034-.014h.007c12.443 0 18.273 2.634 20.326 3.929a.815.815 0 0 1 .036 1.324Z" />
            </svg>
        );
    },
);
