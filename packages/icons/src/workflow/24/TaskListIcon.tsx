import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const TaskListIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M44 4H4a2 2 0 0 0-2 2v36a2 2 0 0 0 2 2h40a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm-2 36H6V8h36Z" />
                <rect height="4" rx=".5" ry=".5" width="16" x="24" y="16" />
                <rect height="4" rx=".5" ry=".5" width="16" x="24" y="28" />
                <path d="M12.224 23.085 8.142 18.91a1 1 0 0 1 .016-1.41l1.43-1.4a1 1 0 0 1 1.412.014l1.852 1.895 5.8-6.4a1 1 0 0 1 1.413-.07l1.482 1.342a1 1 0 0 1 .07 1.412l-7.937 8.764a1 1 0 0 1-1.456.028ZM12.224 35.085 8.142 30.91a1 1 0 0 1 .016-1.41l1.43-1.4a1 1 0 0 1 1.412.014l1.852 1.895 5.8-6.4a1 1 0 0 1 1.413-.07l1.482 1.342a1 1 0 0 1 .07 1.412l-7.937 8.764a1 1 0 0 1-1.456.028Z" />
            </svg>
        );
    },
);
