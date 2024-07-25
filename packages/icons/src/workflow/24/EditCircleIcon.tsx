import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const EditCircleIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M14.5 33.5c1.56-.466 4.393-1.723 6.2-2.266L16.754 27.3Z" />
                <path d="M24 4.1A19.9 19.9 0 1 0 43.9 24 19.9 19.9 0 0 0 24 4.1Zm-2.058 28.587a.864.864 0 0 1-.365.219c-1.271.382-8.552 2.993-8.8 3.049a.237.237 0 0 1-.054.005c-.285 0-.789-.417-.689-.748l3.048-8.791a.88.88 0 0 1 .221-.371L30.961 10.4a1.207 1.207 0 0 1 .815-.358h.034a1.069 1.069 0 0 1 .762.311l5.071 5.071a1.075 1.075 0 0 1 .308.834 1.208 1.208 0 0 1-.356.777Z" />
            </svg>
        );
    },
);
