import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const FileKeyIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <circle cx="29.571" cy="35.376" r="2.543" />
                <path d="M26 20a2 2 0 0 1-2-2V4H10a2 2 0 0 0-2 2v36a2 2 0 0 0 2 2h28a2 2 0 0 0 2-2V20Zm8.184 14.393a6.013 6.013 0 0 1-11.945.49 6.166 6.166 0 0 1 .066-2.15l-2.905-3v-2.681h-3.238a.464.464 0 0 1-.463-.462v-3.237h-3.236a.464.464 0 0 1-.463-.462v-4.624a.464.464 0 0 1 .463-.462h2.119a.475.475 0 0 1 .327.135l10.644 10.642a5.948 5.948 0 0 1 2.743-.605 6.1 6.1 0 0 1 5.888 6.416Z" />
            </svg>
        );
    },
);
