import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const MaximizeIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M19.867 26.04a1 1 0 0 0-1.414 0l-9.142 9.142-3.947-3.946A.781.781 0 0 0 4.8 31a.8.8 0 0 0-.8.754V43.5a.5.5 0 0 0 .5.5h11.75a.8.8 0 0 0 .75-.8.784.784 0 0 0-.235-.56l-3.948-3.947 9.142-9.142a1 1 0 0 0 0-1.414ZM43.5 4H31.754a.8.8 0 0 0-.754.8.784.784 0 0 0 .235.56l3.948 3.947-9.142 9.142a1 1 0 0 0 0 1.414l2.093 2.093a1 1 0 0 0 1.414 0l9.142-9.142 3.947 3.946a.781.781 0 0 0 .563.24.8.8 0 0 0 .8-.754V4.5a.5.5 0 0 0-.5-.5Z" />
            </svg>
        );
    },
);
