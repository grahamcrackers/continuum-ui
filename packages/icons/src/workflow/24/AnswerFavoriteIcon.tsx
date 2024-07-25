import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const AnswerFavoriteIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="m27.232 40.837-6.926-6.692a1.989 1.989 0 0 1 .726-3.306A3.078 3.078 0 0 1 24 29a3.218 3.218 0 0 1 2.429.976l4.495-.673 4.225-8.655a2 2 0 0 1 3.587-.015l4.3 8.617.961.135L44 8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v28a2 2 0 0 0 2 2h12l6 10 2.82-4.7ZM20.8 10.828a.355.355 0 0 1 .243-.4A11 11 0 0 1 23.951 10a12.692 12.692 0 0 1 2.959.323.433.433 0 0 1 .29.4v2.593c0 3.025-.823 11.523-.968 12.6 0 .108-.05.217-.34.217h-3.88a.3.3 0 0 1-.339-.217c-.1-1.008-.874-9.471-.874-12.495Z" />
                <path d="m33.6 32.947 2.924-5.992a.5.5 0 0 1 .9 0l2.977 5.966 6.6.93a.5.5 0 0 1 .281.852l-4.754 4.675 1.156 6.567a.5.5 0 0 1-.723.53l-5.921-3.081-5.888 3.128a.5.5 0 0 1-.727-.522l1.1-6.576-4.795-4.633a.5.5 0 0 1 .27-.856Z" />
            </svg>
        );
    },
);
