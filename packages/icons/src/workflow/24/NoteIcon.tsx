import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const NoteIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M42 6H6a2 2 0 0 0-2 2v28a2 2 0 0 0 2 2h12l5.571 9.285a.5.5 0 0 0 .858 0L30 38l12-.006a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2Zm-31 6h24a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H11a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1Zm24 20H11a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h24a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1Zm4-8H11a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h28a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1Z" />
            </svg>
        );
    },
);
