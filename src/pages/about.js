import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"

export default function AboutPage() {
  return (
    <Layout>
      <SEO title="About" />
      <div class="h-full min-h-screen w-full py-10 px-32 text-xl leading-10">
        <h1 class="text-5xl font-bold">About</h1>
        <h2 class="text-3xl font-bold my-10">Hey There 👋</h2>
        <p>Hi, I’m Joey!</p>
        <p>I’m a software engineer from Toronto, Canada.</p>
        <p>I made this website to show some of my projects, experience, and open source contributions to friends, family, and potential employers.</p>
        <p>If you want to know more about me, feel free to get in contact with me through the following platforms:</p>

        <ul class="list-disc list-inside my-5">
          <li><a target="_blank" rel="noopener" href="https://github.com/joeytepp">GitHub</a></li>
          <li><a target="_blank" rel="noopener" href="https://www.linkedin.com/in/joeytepperman/">LinkedIn</a></li>
          <li><a target="_blank" rel="noopener" href="mailto:joeytepperman@gmail.com">Email</a></li>
        </ul>

        <Link to="/" class="text-black dark:text-white">{"<  Back"}</Link>
      </div>
    </Layout>
  )
}
