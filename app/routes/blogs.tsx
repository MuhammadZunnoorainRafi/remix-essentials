import { Outlet } from '@remix-run/react';

function BlogParent() {
  return (
    <div>
      <h1>BlogParent with outlet inside it</h1>
      <main className="max-w-3xl bg-red">
        <Outlet />
      </main>
    </div>
  );
}

export default BlogParent;
