import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const BlowerIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M30.828 7.341a6.329 6.329 0 0 0-6.4-1.957c-2.4.569-5.88 4.132-7.275 6.814-.053 0-.1-.016-.156-.016a5.754 5.754 0 0 0-2.629.655c1-3.959 3.853-7.267-.2-10.1C10.931.465 6.342 4.172 6.342 4.172a6.328 6.328 0 0 0-1.958 6.4c.569 2.4 4.132 5.88 6.814 7.275 0 .054-.016.1-.016.157a5.754 5.754 0 0 0 .655 2.629c-3.959-1-7.267-3.852-10.1.2-2.27 3.244 1.436 7.832 1.436 7.832a6.328 6.328 0 0 0 6.4 1.958c2.4-.569 5.88-4.132 7.275-6.814.053 0 .1.016.156.016a5.754 5.754 0 0 0 2.629-.655c-1 3.959-3.852 7.266.2 10.1 3.244 2.271 7.833-1.436 7.833-1.436a6.328 6.328 0 0 0 1.958-6.4c-.569-2.4-4.132-5.88-6.814-7.275 0-.054.016-.1.016-.157a5.754 5.754 0 0 0-.655-2.629c3.959 1 7.267 3.852 10.1-.2 2.263-3.243-1.443-7.832-1.443-7.832ZM17 21a3 3 0 1 1 3-3 3 3 0 0 1-3 3Z" />
            </svg>
        );
    },
);
