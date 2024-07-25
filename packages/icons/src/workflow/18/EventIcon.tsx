import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const EventIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M18.5 10.054a.494.494 0 0 0-.5.5v24.782a.494.494 0 0 0 .846.354L26.51 28h9c.445 0 .479-.726.225-.98L18.846 10.2a.489.489 0 0 0-.346-.146Z" />
                <path d="M13.991 30H5.997V6H30v8l4 4V2H2v32h11.991v-4z" />
            </svg>
        );
    },
);
