import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const FileImportantIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M26 20a2 2 0 0 1-2-2V4H10a2 2 0 0 0-2 2v36a2 2 0 0 0 2 2h28a2 2 0 0 0 2-2V20Zm-11.979-1.781a.425.425 0 0 1 .2-.438A6.909 6.909 0 0 1 16.6 17.3a7.791 7.791 0 0 1 2.425.358.5.5 0 0 1 .239.437v2.863a91.452 91.452 0 0 1-.795 9.232c0 .12-.038.237-.277.237h-3.176a.261.261 0 0 1-.277-.237c-.081-1.114-.717-5.774-.717-9.113ZM16.6 40a3.085 3.085 0 0 1-3.392-3.159 3.207 3.207 0 0 1 3.392-3.252 3.158 3.158 0 0 1 3.4 3.252A3.085 3.085 0 0 1 16.6 40Z" />
            </svg>
        );
    },
);
