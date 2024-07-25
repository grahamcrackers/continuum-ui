import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const BrowseIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M35.087 20.17S29.206 7.832 28.442 5.813c-.729-1.926-1.669-3.729-3.729-3.729-2.31 0-3.511 1.674-3.729 3.729-.063.59-.2 2.474-.361 4.23h-5.249c-.2-2.131-.349-4.134-.358-4.23-.181-2.093-1.016-3.73-3.729-3.73-2.06 0-2.91 1.84-3.729 3.729C6.9 7.322.764 20.447.764 20.447h.014a8.2 8.2 0 1 0 15.73 3.263c0-.252-.015-1.466-.038-1.712h3.058c-.022.246-.038 1.461-.038 1.712a8.2 8.2 0 1 0 15.6-3.542ZM8.3 29.082a5.37 5.37 0 1 1 5.37-5.37 5.37 5.37 0 0 1-5.37 5.37Zm19.392 0a5.37 5.37 0 1 1 5.37-5.37 5.37 5.37 0 0 1-5.362 5.37Z" />
            </svg>
        );
    },
);
