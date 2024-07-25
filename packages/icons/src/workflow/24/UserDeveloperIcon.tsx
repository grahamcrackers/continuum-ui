import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const UserDeveloperIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M16.69 39.212a2.667 2.667 0 0 1 0-3.771l8.136-8.136a3.486 3.486 0 0 1 2.034-.941c.959-1.178 4.457-5.868 4.457-11.642 0-7.233-4.116-12.055-10.042-12.055S11.233 7.489 11.233 14.722c0 6.687 4.709 11.945 4.709 11.945 0 2.2-.035 3.969-2.232 4.16C10.7 31.089.908 34.363.058 43.985a1.265 1.265 0 0 0 1.285 1.348h21.468ZM39.053 31.616l5.72 5.721-5.714 5.714a.572.572 0 0 0 0 .81l.972.971a.571.571 0 0 0 .809 0l6.553-6.553a1.332 1.332 0 0 0 0-1.885l-6.559-6.56a.574.574 0 0 0-.81 0l-.971.972a.572.572 0 0 0 0 .81Z" />
                <path d="m29 43.051-5.723-5.721 5.714-5.714a.572.572 0 0 0 0-.81l-.971-.972a.574.574 0 0 0-.81 0l-6.553 6.553a1.333 1.333 0 0 0 0 1.886l6.56 6.559a.571.571 0 0 0 .809 0l.974-.971a.574.574 0 0 0 0-.81ZM33.067 45.89l4.549-17.781a.632.632 0 0 0-.586-.8h-1.256a.613.613 0 0 0-.586.472l-4.549 17.778a.632.632 0 0 0 .586.8h1.256a.614.614 0 0 0 .586-.469Z" />
            </svg>
        );
    },
);
