import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const PageGearIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M46.1 32.207h-3.14a9.078 9.078 0 0 0-1.326-3.219l2.235-2.235a.9.9 0 0 0 0-1.268l-1.359-1.359a.9.9 0 0 0-1.268 0l-2.235 2.235a9.08 9.08 0 0 0-3.218-1.326V21.9a.9.9 0 0 0-.9-.9H33.1a.9.9 0 0 0-.9.9v3.139a9.08 9.08 0 0 0-3.218 1.326l-2.235-2.235a.9.9 0 0 0-1.268 0l-1.359 1.359a.9.9 0 0 0 0 1.268l2.235 2.235a9.078 9.078 0 0 0-1.326 3.219H21.9a.9.9 0 0 0-.9.9V34.9a.9.9 0 0 0 .9.9h3.14a9.078 9.078 0 0 0 1.326 3.219l-2.235 2.235a.9.9 0 0 0 0 1.268l1.359 1.359a.9.9 0 0 0 1.268 0l2.235-2.235a9.083 9.083 0 0 0 3.218 1.326V46.1a.9.9 0 0 0 .9.9H34.9a.9.9 0 0 0 .9-.9v-3.14a9.083 9.083 0 0 0 3.218-1.326l2.235 2.235a.9.9 0 0 0 1.268 0l1.359-1.359a.9.9 0 0 0 0-1.268l-2.235-2.235a9.078 9.078 0 0 0 1.326-3.219H46.1a.9.9 0 0 0 .9-.9V33.1a.9.9 0 0 0-.9-.893ZM34 37.5a3.5 3.5 0 1 1 3.5-3.5 3.5 3.5 0 0 1-3.5 3.5Z" />
                <path d="M18.524 38H6V14h36v6.158a16.035 16.035 0 0 1 4 3.283V8a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v32a2 2 0 0 0 2 2h16.158a15.862 15.862 0 0 1-1.634-4Z" />
            </svg>
        );
    },
);
