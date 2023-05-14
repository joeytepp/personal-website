import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import Link from "gatsby-link"
import Card from "../components/Card/Card"
import ExternalIcon from "../components/Externalcon"
import overmind from "../images/overmind.svg"
import GoLangIcon from "../components/GoLangIcon"
import RubyIcon from "../components/RubyIcon"
import papertrail from "../images/papertrail.jpeg"
import vercel from "../images/vercel.png"
import JavaScriptIcon from "../components/JavaScriptIcon"
import graphqlRuby from "../images/graphql-ruby.png"

export default function OpenSourcePage() {
  return (
    <Layout>
      <SEO title="Open Source" />
      <div className="h-full w-full py-10 sm:px-32 px-8 text-xl">
        <h1 className="text-5xl mb-5 font-bold w-1/2 sm:w-full">Open Source</h1>
        <p>Since I began coding, I have always been very appreciative of open source. Working in tech and seeing how much the tech world relies on open source has strengthened this even further. As a result of this, I have made many efforts to contribute back to the open source community.</p>
        <p>Below are some of the open source contributions I've made that I'm most proud of</p>
        <ul className="my-10">
          <li className="mb-5">
            <Card title="DarthSim/overmind" img={overmind} action="February 2023">
              <Card.Subtitle>
                <a href="https://github.com/DarthSim/overmind/pull/150" target="_blank" rel="noopener" className="no-color">
                  <span className="inline-flex items-center justify-center mr-2 rounded-full border border-green-600 px-4 py-1 hover:bg-green-600 hover:text-white">
                    <span>View on GitHub</span>
                    <ExternalIcon className="inline-block w-2 h-2 ml-1 fill-current" />
                  </span>
                </a>
                <span className="inline-flex items-center justify-center rounded-full border border-cyan-400 px-4 py-1">
                  <GoLangIcon className="inline-block w-3 h-3 mr-1 fill-current" />
                  <span>Golang</span>
                </span>
              </Card.Subtitle>
              <Card.Text>
                Overmind is a process manager for Procfile-based applications and tmux. It is a more robust alternative to <code>Foreman</code>. When running multiple processes are running, it is important that nals are propagated to all processes. This was already supported for <code>SIGTERM</code>, but not for <code>SIGINFO</code>. Since the processes I was using overmind for at the time relied on the <code>SIGINFO</code> signal for some of their fucntionality, I made the effort to add support for this into the tool. In making this contribution I was able to make use of my knowledge of concurrency and nal processing in Golang, and also supporting multiple operating systems in low-level programming.
              </Card.Text>
            </Card>
          </li>
          <li className="mb-5">
            <Card title="paper-trail-gem/paper_trail" img={papertrail} action="March 2022">
              <Card.Subtitle>
                <a href="https://github.com/paper-trail-gem/paper_trail/pull/1366" target="_blank" rel="noopener" className="no-color">
                  <span className="inline-flex items-center justify-center mr-2 rounded-full border border-green-600 px-4 py-1 hover:bg-green-600 hover:text-white">
                    <span>View on GitHub</span>
                    <ExternalIcon className="inline-block w-2 h-2 ml-1 fill-current" />
                  </span>
                </a>
                <span className="inline-flex items-center justify-center rounded-full border border-red-400 px-4 py-1">
                  <RubyIcon className="inline-block w-3 h-3 mr-1 fill-current" />
                  <span>Ruby</span>
                </span>
              </Card.Subtitle>
              <Card.Text>
                Paper trail is a library that allows for historical versioning of database models in Ruby on Rails. At the time I was using this library in a project at work, and I have since used it in several side projects. I noticed when setting up the gem that part of the set up process had been broken changes in the most recent version of Ruby. After noticing this I opened a pull request on the gem's GitHub repository to fix the issue.
              </Card.Text>
            </Card>
          </li>
          <li className="mb-5">
            <Card title="vercel/next.js" img={vercel} action="April 2020">
              <Card.Subtitle>
                <a href="https://github.com/vercel/next.js/pull/11418" target="_blank" rel="noopener" className="no-color">
                  <span className="inline-flex items-center justify-center mr-2 rounded-full border border-green-600 px-4 py-1 hover:bg-green-600 hover:text-white">
                    <span>View on GitHub</span>
                    <ExternalIcon className="inline-block w-2 h-2 ml-1 fill-current" />
                  </span>
                </a>
                <span className="inline-flex items-center justify-center rounded-full border border-yellow-200 px-4 py-1">
                  <JavaScriptIcon className="inline-block w-3 h-3 mr-1 fill-current" />
                  <span>JavaScript</span>
                </span>
              </Card.Subtitle>
              <Card.Text>
                Next.js is a React framework for building static and server-side rendered applications. I was using this framework for a project, and I encountered a bug where the web page was reloading periodically. After investigating and finding the root cause, I opened a pull request in the repository to fix this bug.
              </Card.Text>
            </Card>
          </li>
          <li>
            <Card title="rmosolgo/graphql-ruby" action="June 2019" img={graphqlRuby}>
              <Card.Subtitle>
                <a href="https://github.com/rmosolgo/graphql-ruby/pull/2297" target="_blank" rel="noopener" className="no-color">
                  <span className="inline-flex items-center justify-center mr-2 rounded-full border border-green-600 px-4 py-1 hover:bg-green-600 hover:text-white">
                    <span>View on GitHub</span>
                    <ExternalIcon className="inline-block w-2 h-2 ml-1 fill-current" />
                  </span>
                </a>
                <span className="inline-flex items-center justify-center rounded-full border border-red-400 px-4 py-1">
                  <RubyIcon className="inline-block w-3 h-3 mr-1 fill-current" />
                  <span>Ruby</span>
                </span>
              </Card.Subtitle>
              <Card.Text>
                GraphQL Ruby is a ruby library for creating GraphQL APIs. It is used by many companies, including GitHub, Shopify, and Kickstarter. While working on a project that used GraphQL Subscriptions and Websockets, I noticed an area of the Subscriptions API that could be improved. After figuring out how to improve this API and adding unit tests for my new feature I opened a pull request in the repository that was approved and included in the next release of the library.
              </Card.Text>
            </Card>
          </li>
        </ul>
        <Link to="/" className="text-black dark:text-white">{"<  Back"}</Link>
      </div>
    </Layout>
  )
}
