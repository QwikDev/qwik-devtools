import { Link, type DocumentHead } from '@qwik.dev/router';
import { component$ } from '@qwik.dev/core';

export default component$(() => {
  return (
    <>
      <h1>Hi 👋</h1>
      <div>
        Can't wait to see what you build with qwik!
        <br />
        Happy coding.
      </div>
      <div>
        <Link href="/about">About</Link>
      </div>
      <div>
        <Link href="/blog">Blog</Link>
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: 'Welcome to Qwik',
  meta: [
    {
      name: 'description',
      content: 'Qwik site description',
    },
  ],
};
