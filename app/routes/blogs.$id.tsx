import { useParams } from '@remix-run/react';

function SingleBlog() {
  const params = useParams();

  return (
    <div>
      <h1>SingleBlog</h1>
      <p>{params.id}</p>
    </div>
  );
}

export default SingleBlog;
