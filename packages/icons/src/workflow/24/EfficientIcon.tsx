import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const EfficientIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M12.232 18.084a2 2 0 0 1-.734-3.861 105.769 105.769 0 0 1 12.648-4.091A80.852 80.852 0 0 1 35.594 8.36a2 2 0 0 1 .256 3.993 78.365 78.365 0 0 0-10.829 1.681 103.7 103.7 0 0 0-12.054 3.909 2 2 0 0 1-.735.141ZM12.656 9.874a2 2 0 0 1-.734-3.862 103.482 103.482 0 0 1 12.224-3.88 90.036 90.036 0 0 1 3.057-.63 2 2 0 0 1 .738 3.932c-.923.173-1.9.373-2.92.6a101.607 101.607 0 0 0-11.631 3.7 2 2 0 0 1-.734.14ZM18 44v1.172a2 2 0 0 0 .586 1.414l.828.828a2 2 0 0 0 1.414.586h6.344a2 2 0 0 0 1.414-.586l.828-.828A2 2 0 0 0 30 45.172V44a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2H18a2 2 0 0 0-2 2v4a2.031 2.031 0 0 0 2 2ZM12.935 25.8a2 2 0 0 1-.735-3.861 96.906 96.906 0 0 1 11.946-3.811 80.852 80.852 0 0 1 11.448-1.768 2 2 0 0 1 .256 3.993 78.365 78.365 0 0 0-10.829 1.681 94.754 94.754 0 0 0-11.352 3.629 2 2 0 0 1-.734.137ZM18 29v3h4v-3a4.938 4.938 0 0 0-.553-2.238c-1.429.452-2.826.933-4 1.354A.993.993 0 0 1 18 29ZM35.271 24H31a5.005 5.005 0 0 0-5 5v3h4v-3a1 1 0 0 1 1-1h4.271a2 2 0 0 0 0-4Z" />
            </svg>
        );
    },
);
