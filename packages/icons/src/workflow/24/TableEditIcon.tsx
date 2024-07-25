import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const TableEditIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M21.056 35.9a4.833 4.833 0 0 1 1.17-1.906L24.217 32H16v-4h12.218L36 20.218V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v28a2 2 0 0 0 2 2h15.02ZM32 24H16v-4h16ZM8 8h24v8H8Zm4 24H8v-4h4Zm0-8H8v-4h4ZM45.668 27.01l-4.68-4.68a.986.986 0 0 0-.7-.287h-.032a1.109 1.109 0 0 0-.752.33L25.055 36.82a.816.816 0 0 0-.2.341l-2.813 8.113c-.092.3.373.69.636.69a.2.2 0 0 0 .05 0c.224-.052 6.944-2.461 8.117-2.814a.784.784 0 0 0 .336-.2L45.624 28.5a1.114 1.114 0 0 0 .328-.717.991.991 0 0 0-.284-.773ZM30.18 41.645c-1.754.527-4.5 1.747-6.021 2.2l2.189-6.022Z" />
            </svg>
        );
    },
);
