import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const FileFolderIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M24 31a5 5 0 0 1 5-5h6.586a4.96 4.96 0 0 1 3.535 1.465l.879.879V20H26a2 2 0 0 1-2-2V4H10a2 2 0 0 0-2 2v36a2 2 0 0 0 2 2h14Z" />
                <path d="M47 48H29a1 1 0 0 1-1-1V36h19a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1ZM36.293 30.293a1 1 0 0 0-.707-.293H29a1 1 0 0 0-1 1v3h12Z" />
            </svg>
        );
    },
);
