import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const ShareCheckIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M17.722 6.332 12 0 6.292 6.332A1 1 0 0 0 7.035 8H10v9.5a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5V8h2.979a1 1 0 0 0 .743-1.668ZM27 18.1a8.9 8.9 0 1 0 8.9 8.9 8.9 8.9 0 0 0-8.9-8.9Zm-2.338 14.312-4.128-4.127a.5.5 0 0 1 0-.707l1.036-1.036a.5.5 0 0 1 .707 0l2.731 2.731 6.106-6.106a.5.5 0 0 1 .707 0l1.043 1.043a.5.5 0 0 1 0 .707l-7.5 7.5a.5.5 0 0 1-.702-.005Z" />
                <path d="M14.7 27a12.272 12.272 0 0 1 .384-3H4V14h2v-4H1a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h13.75c-.026-.33-.05-.662-.05-1ZM20 16.893a12.226 12.226 0 0 1 4-1.809V11a1 1 0 0 0-1-1h-5v4h2Z" />
            </svg>
        );
    },
);
