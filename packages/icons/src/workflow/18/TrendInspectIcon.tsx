import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const TrendInspectIcon = React.forwardRef<SVGSVGElement, IconProps>(
    ({ className, size, focusable = false, hidden = true, color = "currentColor", ...props }, forwardedRef) => {
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                height="36"
                viewBox="0 0 36 36"
                width="36"
                className={iconVariants({ size, className })}
                focusable={focusable}
                aria-hidden={hidden}
                {...props}
                ref={forwardedRef}
            >
                <path d="m8.9 26.619-1.6 1.79-3.687-7.227-3.545 2.659 1.405 2.384L2.659 25.2l4.5 8.25 3.955-5.28A14.015 14.015 0 0 1 8.9 26.619ZM23.07 19.332 26 15.954a7.932 7.932 0 0 0-.673-3.155L23.4 15.077l-3.312-4.759c-.066-.025-.137-.042-.2-.064l-7.632 11.291a7.987 7.987 0 0 0 2.189 1.584l5.548-8.222ZM31.015 10.875l4.849-5.443L33.88 3.6l-4.2 4.707a13.9 13.9 0 0 1 1.335 2.568Z" />
                <path d="m35.338 30.3-7.474-7.474a12.013 12.013 0 1 0-3.04 3.04l7.476 7.472a2.155 2.155 0 0 0 3.04-3.04ZM8 16a10 10 0 1 1 10 10A10 10 0 0 1 8 16Z" />
            </svg>
        );
    },
);
