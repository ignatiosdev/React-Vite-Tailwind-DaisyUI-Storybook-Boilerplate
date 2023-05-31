import Card from "./Card";

export default {
  title: "Components/Card",
  component: Card,
  args: {},
};

const Template = (args) => <Card {...args} />;

export const Story = Template.bind({});
Story.args = {};
