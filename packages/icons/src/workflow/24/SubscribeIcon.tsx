import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const SubscribeIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <rect height="2" rx=".5" ry=".5" width="24" x="12" y="18" />
                <path d="M47.109 15.406 25.109.74a2 2 0 0 0-2.218 0l-22 14.666A2 2 0 0 0 0 17.07v19.836l13.951-7.666L.716 20H8v-7a1 1 0 0 1 1-1h30a1 1 0 0 1 1 1v7h7.284l-13.253 9.251L48 36.959V17.07a2 2 0 0 0-.891-1.664Z" />
                <path d="m30.269 31.743-4.062 2.687a4 4 0 0 1-4.414 0l-4.075-2.7L0 41.47V42a2 2 0 0 0 2 2h44a2 2 0 0 0 2-2v-.472ZM34.811 24.452a.25.25 0 0 0-.148-.452H13.374a.25.25 0 0 0-.149.45l1.819 1.35a1 1 0 0 0 .594.2h16.741a1 1 0 0 0 .593-.2Z" />
            </svg>
        );
    },
);
