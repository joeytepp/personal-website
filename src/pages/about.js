import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import { Link } from "gatsby"

export default function AboutPage() {
  return (
    <Layout>
      <SEO title="About" />
      <div className="h-full min-h-screen w-full py-10 sm:px-32 px-8 text-xl leading-10">
        <h1 className="text-5xl font-bold">About</h1>
        <h2 className="text-3xl font-bold my-10">Hey There 👋</h2>
        <p>
          Hi, I’m Joey!
          I’m a software engineer from Toronto, Canada.
          My passions include music (playing and listening), basketball, travelling, books, and movies.
          I have lived in 4 countries and 5 cities and travelled to over 30 countries.
          I can play multiple instruments by ear including guitar, piano, and drums.
          I made this website to show some of my projects, experience, and open source contributions to friends, family, and potential employers.
          If you want to know more about me, feel free to get in contact with me through the following platforms:
        </p>
        <ul className="list-disc list-inside my-5">
          <li><a target="_blank" rel="noopener" href="https://github.com/joeytepp">GitHub</a></li>
          <li><a target="_blank" rel="noopener" href="https://www.linkedin.com/in/joeytepp/">LinkedIn</a></li>
          <li><a target="_blank" rel="noopener" href="mailto:joeytepperman@gmail.com">Email</a></li>
        </ul>

        <Link to="/" className="text-black dark:text-white">{"<  Back"}</Link>
      </div>
    </Layout>
  )
}
