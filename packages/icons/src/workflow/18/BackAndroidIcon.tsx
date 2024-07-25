import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const BackAndroidIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M35.5 16.08h-28l9.94-9.94a.967.967 0 0 0 0-1.4l-.7-.72a1.027 1.027 0 0 0-1.42 0L2.48 16.88a1.027 1.027 0 0 0 0 1.42l12.78 13.68a1.027 1.027 0 0 0 1.42 0l.7-.7a1.027 1.027 0 0 0 0-1.42L7.52 19H35.5a.5.5 0 0 0 .5-.5v-1.92a.5.5 0 0 0-.5-.5Z" />
            </svg>
        );
    },
);
