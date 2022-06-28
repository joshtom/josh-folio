import React from "react";
import Hero from "@src/components/Hero/Hero";
import { cVar } from "@src/helpers";
import type { NextPage } from "next";
import Head from "next/head";
import styled from "styled-components";
import gsap from "gsap";
import Defaultlayout from "@src/layout/DefaultLayout";
import Skills from "@src/components/Skills/Skills";
import Project from "@src/components/Project/Project";
import About from "@src/components/About/About";
import Contact from "@src/components/Contact/Contact";
import Footer from "@src/components/Footer/Footer";
import Preloader from "@src/components/Preloader/Preloader";

const Container = styled.div`
  width: 100%;
  height: auto;
  background-color: ${cVar("black2")};
  padding-bottom: 3rem;
`;



const Home: NextPage = () => {
  const timeline = gsap.timeline();
  const gsaptimeline = gsap.timeline();

  return (
    <Defaultlayout>
      <Container>
        <Head>
          <title>Joshua Olajide | Home</title>
        </Head>
        <Preloader timeline={timeline} />
        <Hero timeline={gsaptimeline} />
        <Skills timeline={gsaptimeline} />
        <Project timeline={gsaptimeline} />
        <About />
        <Contact />
        <Footer timeline={gsaptimeline} />
      </Container>
    </Defaultlayout>
  );
};

export default Home;
