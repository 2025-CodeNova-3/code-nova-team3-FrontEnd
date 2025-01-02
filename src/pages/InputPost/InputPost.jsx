import React from 'react';
import Header from '../../components/Header/Header';
import FirstInput from '../../components/FirstInput/FirstInput';
import SecondInput from '../../components/SecondInput/SecondInput';
import PostFooter from '../../components/PostFooter/PostFooter';
import PostTimeSet from '../../components/PostTimeSet/PostTimeSet';

const InputPost = () => {
  return (
    <>
    <Header />
    <FirstInput />
    <SecondInput />
    <PostTimeSet />
    <PostFooter />
    </>
  )
};

export default InputPost;