import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const AttachIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M21.707 41.643a9.044 9.044 0 0 1-6.439 2.683h-.145A9.5 9.5 0 0 1 8.549 41.5a9.211 9.211 0 0 1-.143-13.158l22.768-22.8a6.64 6.64 0 0 1 4.267-2.014A5.071 5.071 0 0 1 39.6 5.056a4.818 4.818 0 0 1 1.511 4.184 7.814 7.814 0 0 1-2.157 4.085S22.834 29.414 22.247 30c-1.041 1.041-2.019 1.791-3.136.674s-.239-2.138.717-3.094c.364-.363 11.785-11.771 13.726-13.707a1 1 0 0 0 .02-1.39l-.92-.979a1 1 0 0 0-1.438-.02L17.105 25.646c-1.383 1.383-3.11 4.436-.1 7.449 3.623 3.623 7.739-.8 7.739-.8l16.612-16.568c3.416-3.412 4.727-8.992.643-13.076A8.48 8.48 0 0 0 35.762.109a9.908 9.908 0 0 0-6.991 3.034L6.115 25.764a12.849 12.849 0 0 0 18.17 18.172L43.818 24.4a1 1 0 0 0 0-1.414L42.8 21.967a1 1 0 0 0-1.415 0Z" />
            </svg>
        );
    },
);
