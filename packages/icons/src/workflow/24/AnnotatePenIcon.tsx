import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const AnnotatePenIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M37.262 6.224a1.288 1.288 0 0 0-.056-1.817 1.285 1.285 0 0 0-1.817-.058 1.856 1.856 0 0 0-.156.193l-.016-.02-11.652 11.649.016.021a.891.891 0 0 0-.194.159 1.327 1.327 0 0 0 1.873 1.871 1.205 1.205 0 0 0 .159-.194l.017.018L37.089 6.4l-.02-.017a1.155 1.155 0 0 0 .193-.159ZM39.631 8.255c-.96.961-12.716 12.859-12.785 12.928a2.952 2.952 0 0 1-3.148.039l-1.024-.967-14.393 14.12a1.992 1.992 0 0 0-.436.641L5.35 43.558a.5.5 0 0 0 .66.654l8.578-2.612a2 2 0 0 0 .612-.417l28.779-28.667ZM40.985 5.974l4.141 3.941c.505-.949.548-2.678-1.077-4.311a4.4 4.4 0 0 0-4.293-1.414c-.238.086.086.407.184.5s.981 1.155 1.045 1.284ZM4.964 36.649c-4.071-12.08.4-22.577 11.634-28.68 1.692-.92.357-3.608-1.346-2.682-12.333 6.7-16.688 17.92-12.2 31.379 1.912 5.753 1.912-.017 1.912-.017Z" />
            </svg>
        );
    },
);
