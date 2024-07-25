import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const AttachmentExcludeIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M21.251 42.019a9.009 9.009 0 0 1-5.984 2.307h-.144A9.5 9.5 0 0 1 8.548 41.5a9.211 9.211 0 0 1-.142-13.158l22.767-22.8a6.642 6.642 0 0 1 4.268-2.014 5.068 5.068 0 0 1 4.153 1.525 4.819 4.819 0 0 1 1.517 4.187 7.816 7.816 0 0 1-2.158 4.085l-7.577 7.563A15.893 15.893 0 0 1 36 20.2c.279 0 .552.028.828.042l4.527-4.515c3.416-3.412 4.728-8.992.644-13.076A8.481 8.481 0 0 0 35.761.109a9.906 9.906 0 0 0-6.99 3.034L6.115 25.764a12.841 12.841 0 0 0 16.792 19.349 15.843 15.843 0 0 1-1.656-3.094Z" />
                <path d="M33.554 13.874a1 1 0 0 0 .02-1.39l-.92-.979a1 1 0 0 0-1.439-.02l-14.11 14.161c-1.383 1.383-3.11 4.436-.1 7.449a4.365 4.365 0 0 0 3.173 1.413 15.786 15.786 0 0 1 .756-3.469 1.436 1.436 0 0 1-1.825-.364c-1.117-1.117-.239-2.138.717-3.094.365-.363 11.787-11.771 13.728-13.707ZM36 24.1A11.9 11.9 0 1 0 47.9 36 11.9 11.9 0 0 0 36 24.1ZM44.924 36a8.858 8.858 0 0 1-1.663 5.159l-12.42-12.421A8.9 8.9 0 0 1 44.924 36Zm-17.849 0a8.855 8.855 0 0 1 1.663-5.158l12.42 12.42A8.9 8.9 0 0 1 27.075 36Z" />
            </svg>
        );
    },
);
