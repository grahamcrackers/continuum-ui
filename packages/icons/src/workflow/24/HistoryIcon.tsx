import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const HistoryIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M25 10h-2a1 1 0 0 0-1 1v12.586a1 1 0 0 0 .293.707l6.3 6.3a1 1 0 0 0 1.414 0l1.336-1.336a1 1 0 0 0 0-1.414l-5.054-5.054a1 1 0 0 1-.289-.703V11a1 1 0 0 0-1-1Z" />
                <path d="M44.221 22.915A19.994 19.994 0 0 0 5.182 18H.8a.8.8 0 0 0-.8.806.785.785 0 0 0 .236.56l6.435 6.488a.5.5 0 0 0 .707 0l6.386-6.488a.785.785 0 0 0 .236-.56.8.8 0 0 0-.8-.806H9.215a16.2 16.2 0 1 1 3.932 17.787.493.493 0 0 0-.69.005l-1.986 1.987a.506.506 0 0 0 .005.722 20 20 0 0 0 33.745-15.586Z" />
            </svg>
        );
    },
);
