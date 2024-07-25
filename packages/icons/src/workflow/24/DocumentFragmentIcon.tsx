import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const DocumentFragmentIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M46 6H2a2.071 2.071 0 0 0-2 2v32a2 2 0 0 0 2 2h44a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2ZM4 10h20v20c-1.04-1.837-2.879-3.674-3.714-3.619-.8.1-3.82 2.143-4.81 2.143-.886 0-4.4-3.286-5.381-3.286C7.333 25.238 5.81 28.19 4 30Zm40 28H4v-4h40Zm0-8H28v-4h16Zm0-8H28v-4h16Zm0-8H28v-4h16Z" />
                <circle cx="17.5" cy="18.5" r="3" />
            </svg>
        );
    },
);
