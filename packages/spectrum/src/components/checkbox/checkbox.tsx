import { Checkmark100Icon, Dash100Icon } from "@continuum-ui/icons/ui/medium";
import { cn } from "@continuum-ui/utils";
import { VariantProps } from "class-variance-authority";
import * as React from "react";
import { checkboxVariants } from "./variants";

/* 
    This is actually really p'in me off. To get the checkbox to play nice with the radix-ui/checkbox,
    we will have to redo some of the css. and I really don't wanna mess with that right now. so...

    TODO: adjust spectrum css to be able to work with radix-ui/checkbox
*/

export type CheckboxRootProps = React.LabelHTMLAttributes<HTMLLabelElement> & VariantProps<typeof checkboxVariants>;

const CheckboxRoot = React.forwardRef<HTMLLabelElement, CheckboxRootProps>(({ className, size, ...props }, ref) => (
    <label className={cn(checkboxVariants({ size, className }))} ref={ref} {...props}  />
));
CheckboxRoot.displayName = "CheckboxRoot";

////

export type CheckboxInputProps = Omit<React.HTMLAttributes<HTMLInputElement>, 'type'> & { checked?: boolean }
const CheckboxInput = React.forwardRef<HTMLInputElement, CheckboxInputProps>(
    ({ className, ...props }, ref) => {
          
        return (
            <>
                <input type="checkbox" ref={ref} className={cn("spectrum-Checkbox-input", className)} {...props} />
                <span className="spectrum-Checkbox-box">
                    <Checkmark100Icon className="spectrum-UIIcon-Checkmark100 spectrum-Checkbox-checkmark" />
                    <Dash100Icon className="spectrum-UIIcon-Dash100 spectrum-Checkbox-partialCheckmark" />
                </span>
            </>
        );
    },
);
CheckboxInput.displayName = "CheckboxInput";

///

const CheckboxLabel = React.forwardRef<HTMLSpanElement, React.HTMLAttributes<HTMLSpanElement>>(
    ({ className, ...props }, ref) => (
        <span className={cn("spectrum-Checkbox-label", className)} ref={ref} {...props} />
    ),
);
CheckboxLabel.displayName = "CheckboxLabel";


export { CheckboxRoot,  CheckboxInput, CheckboxLabel };

