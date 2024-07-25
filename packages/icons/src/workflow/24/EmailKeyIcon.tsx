import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const EmailKeyIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M13.172 23.819 0 14.161v16.928l13.172-7.27zM34 34.508a11.192 11.192 0 0 1-5.395-6.124l-1.748 1.282a5.012 5.012 0 0 1-5.713 0L16.56 26.3 0 35.437V38a2.1 2.1 0 0 0 2.182 2H34ZM40 14a13.1 13.1 0 0 1 1.567.1L48 9.387V8a2.1 2.1 0 0 0-2.182-2H2.182A2.1 2.1 0 0 0 0 8v1.387l23.685 17.368a.54.54 0 0 0 .633 0l3.737-2.741C28.6 18.409 33.746 14 40 14ZM48 16.824v-2.663l-1.892 1.387A12.077 12.077 0 0 1 48 16.824Z" />
                <path d="M48 25c0-3.866-3.582-7-8-7s-8 3.134-8 7c0 3.258 2.556 5.972 6 6.752V47a1 1 0 0 0 1 1h6.5a.5.5 0 0 0 .5-.5v-3.638a.5.5 0 0 0-.5-.5H42V42h3.5a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5H42v-6.248c3.444-.78 6-3.494 6-6.752Zm-8 .774a2.4 2.4 0 1 1 2.4-2.4 2.4 2.4 0 0 1-2.4 2.4Z" />
            </svg>
        );
    },
);
