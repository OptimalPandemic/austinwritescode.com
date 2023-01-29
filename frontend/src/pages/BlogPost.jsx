import React from 'react';

import Header from '../partials/Header';
import Post from '../partials/Post';
import Footer from '../partials/Footer';

function BlogPost() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">

      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="grow">

        {/*  Page sections */}
        <Post />

      </main>

      {/*  Site footer */}
      <Footer />

    </div>
  );
}

export default BlogPost;