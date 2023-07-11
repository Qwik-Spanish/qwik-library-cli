import { Hello } from './components/hello';
import { Logo } from './components/logo';

export default () => {
  return (
    <>
      <head>
        <meta charSet='utf-8' />
        <title>Qwik Blank App</title>
      </head>
      <body>
        <h2>Example components</h2>
        <h4>Created by: Anartz Mugika Ledo</h4>
        <Logo
          url='https://qwik.builder.io/'
          alt='Qwik Logo'
          width={400}
          height={147}
          image='https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F667ab6c2283d4c4d878fb9083aacc10f'
        />
        <Hello name='Anartz Mugika :)' />
      </body>
    </>
  );
};
