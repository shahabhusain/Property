import React from "react";
import Hero from "../../components/homeSreen/Hero";
import InputField from '../../components/homeSreen/InputField'
import Partner from '../../components/homeSreen/Partner'
import Community from '../../components/homeSreen/Community'
import Unrivelled from '../../components/homeSreen/Unrivelled'
import Register from '../../components/homeSreen/Register'
import GC from '../../components/homeSreen/GC'
const page = () => {
  return (
    <>
      <Hero />
      <InputField />
      <Partner />
      <Community />
      <Unrivelled />
      <Register />
      <GC />
    </>
  );
};

export default page;
