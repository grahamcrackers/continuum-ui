import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const GraphStreamRankedIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M22.42 27.532C16.185 27.783 14.172 29.5 10 29.5c-3.929 0-6.961-2-8-2V34h32v-4.5c-7.555 0-9.58-1.7-11.58-1.968ZM10 14.5a10.219 10.219 0 0 1 5.967 2.3c1.352.914 2.518 1.7 4.033 1.7.779 0 1.139-4.258 1.291-6.076.039-.457.08-.933.125-1.414A1.84 1.84 0 0 1 20 12c-3.271 0-5.615-4-10-4-5.98 0-5.328 4-8 4v6.5c.768 0 1.338-.492 2.281-1.359A7.984 7.984 0 0 1 10 14.5Z" />
                <path d="M24.281 12.676C23.916 17.014 23.537 21.5 20 21.5a9.885 9.885 0 0 1-5.715-2.223C12.877 18.324 11.662 17.5 10 17.5c-1.682 0-2.611.855-3.686 1.846C5.219 20.355 3.977 21.5 2 21.5v3a8.7 8.7 0 0 1 3.926 1.016A8.5 8.5 0 0 0 10 26.5a16.8 16.8 0 0 0 4.432-.729A34.514 34.514 0 0 1 22 24.552a3.375 3.375 0 0 1 .447-.022c.494-.018 1.008-.03 1.553-.03.656 0 .936-.785 1.3-3.654.42-3.324 1.055-8.346 6.7-8.346h2v-9h-6c-2.736 0-3.268 3.8-3.719 9.176Z" />
                <path d="M28.273 21.221a12.082 12.082 0 0 1-1.2 4.535A27.212 27.212 0 0 0 34 26.5v-11h-2c-2.719 0-3.225 1.744-3.727 5.721Z" />
            </svg>
        );
    },
);
