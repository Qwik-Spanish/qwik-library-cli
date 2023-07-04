import { Counter } from './components/counter/counter';
import { DateInput } from './components/form/date';
import { Logo } from './components/logo';

export default () => {
  return (
    <>
      <head>
        <meta charSet='utf-8' />
        <title>Qwik Blank App</title>
      </head>
      <body>
        <Logo
          url='https://qwik.builder.io/'
          alt='Qwik Logo'
          width={400}
          height={147}
          image='https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F667ab6c2283d4c4d878fb9083aacc10f'
        />
        <Counter />
        <DateInput />
        <DateInput selectDay='1986-01-10'/>
      </body>
    </>
  );
};
