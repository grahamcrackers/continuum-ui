import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const AppIcon = React.forwardRef<SVGSVGElement, IconProps>(
    ({ className, size, focusable = false, hidden = true, color = "currentColor", ...props }, forwardedRef) => {
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 48 48"
                className={iconVariants({ size, className })}
                focusable={focusable}
                aria-hidden={hidden}
                {...props}
                ref={forwardedRef}
            >
                <path d="M23.941 17.273c-.416 1.886-1.564 5.137-2.285 7.383h4.656c-.554-1.883-1.789-5.383-2.343-7.383Z" />
                <path d="M36 4H12a8 8 0 0 0-8 8v24a8 8 0 0 0 8 8h24a8 8 0 0 0 8-8V12a8 8 0 0 0-8-8Zm-3.462 28h-3.661a.249.249 0 0 1-.277-.194L27.233 28H20.8l-1.246 3.745a.3.3 0 0 1-.333.25h-3.328c-.222 0-.277-.106-.222-.3 1.47-4.16 3.828-10.981 5.575-15.781a4.937 4.937 0 0 0 .277-1.72.175.175 0 0 1 .2-.194h4.465a.208.208 0 0 1 .222.139c2.025 5.574 4.243 11.926 6.295 17.584.084.194.028.277-.167.277Z" />
            </svg>
        );
    },
);
