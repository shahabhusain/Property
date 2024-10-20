import React from 'react';
import Auth from '../(Auth)/signup/page';
import Main from '../(main)/home/page';

let user = false;

const Page = () => {
  return (
    <>
      {user ? <Auth /> : <Main />}
    </>
  );
};

export default Page;
