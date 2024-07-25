import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const OSIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M19.417 17.9c.029 6.035-3.7 9.97-9.008 9.97-5.656 0-9.037-4.2-9.037-9.883 0-5.6 3.673-9.854 9.037-9.854 5.713-.001 8.979 4.367 9.008 9.767Zm-8.891 6.851c3.294 0 5.277-2.711 5.247-6.763 0-4.081-2.011-6.734-5.422-6.734-3.09 0-5.335 2.42-5.335 6.734-.001 3.758 1.923 6.761 5.509 6.761ZM22.185 26.819a.433.433 0 0 1-.2-.437V23.35c0-.117.117-.175.233-.117a9.81 9.81 0 0 0 5.182 1.516c2.39 0 3.411-.933 3.411-2.187 0-1.079-.7-1.895-2.915-2.828l-1.4-.583c-3.586-1.516-4.519-3.323-4.519-5.51 0-3.119 2.361-5.51 6.763-5.51a10.69 10.69 0 0 1 4.46.758c.146.087.175.175.175.379V12.1c0 .117-.088.233-.263.117a9.107 9.107 0 0 0-4.4-.962c-2.507 0-3.294 1.05-3.294 2.07 0 1.05.671 1.778 2.974 2.74l1.108.466c3.79 1.574 4.868 3.411 4.868 5.714 0 3.411-2.682 5.626-7.084 5.626a11.094 11.094 0 0 1-5.099-1.052Z" />
            </svg>
        );
    },
);
