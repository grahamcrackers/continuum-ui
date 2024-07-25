import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const FastIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M27.909 13.432a4.729 4.729 0 0 0-1.052-.043L18.516 5.9a6.888 6.888 0 0 0 .964 4.637c.808 1.262 3.14 2.7 5.028 3.71a3.178 3.178 0 0 0-1.227 1.982 3.069 3.069 0 0 0 .1 1.4 13.207 13.207 0 0 0-5.918-4.129c-5.437-1.488-7.476-.661-8.927-.5a2.748 2.748 0 0 0 .331-1 2.784 2.784 0 1 0-2.515 2.417l-.283.691C3.225 20.983 7.141 24.1 9.513 25.435c.838.473 3.529 1.535 3.529 1.535l-3.605 2.611A1.849 1.849 0 0 0 8.868 32s3.214-1.934 6.579-3.984L20 30a2.141 2.141 0 0 0 2.645-.832l-4.766-2.638a249.35 249.35 0 0 0 4.4-2.744 8.158 8.158 0 0 0 3.338-3.8 4.708 4.708 0 0 0 1.161.363c2.242.368 5.551-.681 5.865-2.592s-2.491-3.957-4.734-4.325ZM15.481 25.205l-2.995-1.655a6.876 6.876 0 0 0 1.691-2.85 52.26 52.26 0 0 0 4.773 1.994Z" />
            </svg>
        );
    },
);
