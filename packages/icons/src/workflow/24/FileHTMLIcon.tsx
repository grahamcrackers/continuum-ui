import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const FileHTMLIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M28 4v12h12L28 4z" />
                <path d="M26 20a2 2 0 0 1-2-2V4H10a2 2 0 0 0-2 2v36a2 2 0 0 0 2 2h28a2 2 0 0 0 2-2V20Zm-4.793 17.8a1.178 1.178 0 0 1-.959 1.862h-1.439a1.176 1.176 0 0 1-.942-.471L13.1 32.833l4.77-6.361a1.176 1.176 0 0 1 .939-.472h1.439a1.178 1.178 0 0 1 .959 1.862l-3.384 5.167Zm13.54 1.733h-3.322v-5.039h-4.242v5.043H23.86V26.128h3.322v5.043h4.242v-5.043h3.322Z" />
            </svg>
        );
    },
);
