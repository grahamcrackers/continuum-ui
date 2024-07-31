import { CheckboxRoot, CheckboxInput, CheckboxLabel } from "@continuum-ui/spectrum/components/checkbox";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
    title: "Spectrum/Checkbox",
    component: CheckboxRoot,
    argTypes: {
        size: {
            options: ["sm", "md", "lg", "xl"],
            control: { type: "select" },
        },
    },
    args: {
        size: "md",
    },
} satisfies Meta<typeof CheckboxRoot>;

export default meta;
type Story = StoryObj<typeof CheckboxRoot>;

export const Default: Story = {
    render: () => (
        <CheckboxRoot>
            <CheckboxInput />
            <CheckboxLabel>Accept terms and conditions.</CheckboxLabel>
        </CheckboxRoot>
    ),
};
