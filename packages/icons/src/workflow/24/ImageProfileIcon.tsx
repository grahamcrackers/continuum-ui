import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const ImageProfileIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M46 6H2a2 2 0 0 0-2 2v32a2 2 0 0 0 2 2h44a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2Zm-2 32h-5.368c-1.373-2.2-4.019-4.368-8.978-4.871a1.535 1.535 0 0 1-1.329-1.541v-2.224a1.539 1.539 0 0 1 .392-.993 11.746 11.746 0 0 0 2.671-7.33c0-5.547-2.942-8.647-7.387-8.647s-7.471 3.222-7.471 8.647a11.873 11.873 0 0 0 2.8 7.329 1.539 1.539 0 0 1 .392.993v2.214a1.528 1.528 0 0 1-1.333 1.542c-5.112.445-7.741 2.635-9.065 4.88H4V10h40Z" />
            </svg>
        );
    },
);
