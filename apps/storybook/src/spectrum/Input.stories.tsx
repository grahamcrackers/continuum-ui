import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "@continuum-ui/spectrum/components/input";

const meta = {
    title: "Spectrum/Input",
    component: Input,
    argTypes: {
        size: {
            options: ['sm', 'md', 'lg', 'xl'],
            control: { type: "select"},
        },        
    },
    args: {
        // variant: "accent",
        // size: "md",
        // fill: "fill",
        disabled: false,
    },
} satisfies Meta<typeof Input>

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {};

