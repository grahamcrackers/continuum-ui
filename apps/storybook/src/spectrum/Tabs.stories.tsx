import { Tabs, TabsContent, TabsList, TabsTrigger } from "@continuum-ui/spectrum/components/tabs";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
    title: "Spectrum/Tabs",
    component: Tabs,
    // argTypes: {
    //     size: {
    //         options: ['sm', 'md', 'lg', 'xl'],
    //         control: { type: "select"},
    //     },
    // },
    // args: {
    //     // variant: "accent",
    //     // size: "md",
    //     // fill: "fill",
    //     disabled: false,
    // },
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof Tabs>;

export const Default: Story = {
    render: () => (
        <Tabs defaultValue="account" className="w-[400px]">
            <TabsList>
                <TabsTrigger value="account" className="is-selected">Account</TabsTrigger>
                <TabsTrigger value="password">Password</TabsTrigger>
            </TabsList>
            <TabsContent value="account">Make changes to your account here.</TabsContent>
            <TabsContent value="password">Change your password here.</TabsContent>
        </Tabs>
    ),
};
