import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const BracketsIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M18 41.578a1 1 0 0 0-1-1h-2.024a.964.964 0 0 1-1-.917V29c0-2.342-3.87-5.021-3.87-5.021s3.87-2.6 3.87-4.979V8.282a.945.945 0 0 1 .983-.9H17a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1h-.959a8 8 0 0 0-8 8.037c.018 3.859.036 7.909.036 9.132 0 1.637-2.157 3.17-3.679 4.047a.873.873 0 0 0-.01 1.544c1.523.9 3.689 2.452 3.689 4.029V38a8 8 0 0 0 8 8H17a1 1 0 0 0 1-1ZM30 41.578a1 1 0 0 1 1-1h2.024a.964.964 0 0 0 1-.917V29c0-2.342 3.871-5.021 3.871-5.021s-3.871-2.6-3.871-4.979V8.282a.944.944 0 0 0-.982-.9H31a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h.96a8 8 0 0 1 8 8.037c-.019 3.859-.037 7.909-.037 9.132 0 1.637 2.157 3.17 3.68 4.047a.873.873 0 0 1 .009 1.544c-1.523.9-3.689 2.452-3.689 4.029V38a8 8 0 0 1-8 8H31a1 1 0 0 1-1-1Z" />
            </svg>
        );
    },
);
