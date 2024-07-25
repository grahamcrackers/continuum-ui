import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const DocumentFragmentGroupIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M46 14H10a2 2 0 0 0-2 2v24a2 2 0 0 0 2 2h36a2 2 0 0 0 2-2V16a2 2 0 0 0-2-2Zm-34 4h16v12c-1.04-1.837-2.879-3.674-3.714-3.619-.8.1-3.82 2.143-4.81 2.143-.886 0-2.741-2.774-3.726-2.774-2.762 0-1.94 2.44-3.75 4.25Zm32 20H12v-4h32Zm0-8H32v-4h12Zm0-8H32v-4h12Z" />
                <circle cx="21.5" cy="22.5" r="3" />
                <path d="M4 11a1 1 0 0 1 1-1h35V7a1 1 0 0 0-1-1H1a1 1 0 0 0-1 1v26a1 1 0 0 0 1 1h3Z" />
            </svg>
        );
    },
);
