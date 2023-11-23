import { useSearchParams } from '@remix-run/react';

function SingleBlog() {
  const searchParams = useSearchParams();
  console.log(searchParams);
  return (
    <div>
      <h1>SingleBlog</h1>
      <p></p>
    </div>
  );
}

export default SingleBlog;
