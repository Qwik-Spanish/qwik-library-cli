import { component$ } from '@builder.io/qwik';

export interface HelloProps {
  name: string;
}

export const Hello = component$<HelloProps>((props: HelloProps) => {
  const {name} = props;
  return (
    <div>
        Hello {name}!!. This template to create our components
    </div>
  );
});