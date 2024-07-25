import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const LooksIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M27.99 13.206c0-.07.01-.137.01-.206a11 11 0 0 0-22 0c0 .069.009.136.01.206A10.994 10.994 0 1 0 17 32.213a10.994 10.994 0 1 0 10.99-19.007ZM17 29.664a8.925 8.925 0 0 1-2.94-6.073 10.771 10.771 0 0 0 5.88 0A8.925 8.925 0 0 1 17 29.664ZM17 22a8.9 8.9 0 0 1-2.848-.5A8.929 8.929 0 0 1 17 16.336a8.929 8.929 0 0 1 2.848 5.16A8.9 8.9 0 0 1 17 22Zm-4.736-1.376A8.961 8.961 0 0 1 8.152 14.5 8.9 8.9 0 0 1 11 14a8.9 8.9 0 0 1 4.308 1.144 10.978 10.978 0 0 0-3.044 5.48Zm6.428-5.48a8.53 8.53 0 0 1 7.156-.64 8.961 8.961 0 0 1-4.112 6.12 10.978 10.978 0 0 0-3.044-5.48ZM17 4a8.973 8.973 0 0 1 8.94 8.41A10.9 10.9 0 0 0 17 13.787a10.9 10.9 0 0 0-8.94-1.377A8.973 8.973 0 0 1 17 4Zm-6 28a8.981 8.981 0 0 1-4.736-16.624A11.011 11.011 0 0 0 12.01 22.8c0 .069-.01.136-.01.2a10.961 10.961 0 0 0 3.308 7.856A8.894 8.894 0 0 1 11 32Zm12 0a8.894 8.894 0 0 1-4.308-1.144A10.961 10.961 0 0 0 22 23c0-.069-.009-.136-.01-.2a11.011 11.011 0 0 0 5.746-7.419A8.981 8.981 0 0 1 23 32Z" />
            </svg>
        );
    },
);
