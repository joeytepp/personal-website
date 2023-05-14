import React from "react"
import "flowbite"

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import { Link } from "gatsby"

import singsongLogo from "../images/singsong-logo.png"
import spikesosLogo from "../images/spikesos-logo.png"
import ExternalIcon from "../components/Externalcon"
import RubyIcon from "../components/RubyIcon"
import DollarIcon from "../components/DollarIcon"
import NodeIcon from "../components/NodeIcon"
import ReactIcon from "../components/ReactIcon"
import spike1 from "../images/spike-1.png"
import spike2 from "../images/spike-2.png"
import spike3 from "../images/spike-3.png"
import spike4 from "../images/spike-4.png"
import spike5 from "../images/spike-5.png"
import spike6 from "../images/spike-6.png"
import spike7 from "../images/spike-7.png"
import spike8 from "../images/spike-8.png"
import Card from "../components/Card/Card"
import tasktreeLogo from "../images/tasktree-logo.svg"
import tasktree1 from "../images/task-1.png"
import tasktree2 from "../images/task-2.png"
import tasktree3 from "../images/task-3.png"
import tasktree4 from "../images/task-4.png"
import tasktree5 from "../images/task-5.png"
import tasktree6 from "../images/task-6.png"


export default function ProjectsPage() {
  return (
    <Layout>
      <SEO title="Projects" />
      <div className="h-full w-full py-10 sm:px-32 px-8 text-xl">
        <h1 className="text-5xl mb-5 font-bold">Projects</h1>
        <p>Over the years I've worked on many projects.</p>
        <p>I've used these as ways to learn and develop new skills, solve problems, and try out new tools, frameworks, and languages. Below is a selection of some of my projects that I'm most proud of</p>

        <ul className="my-10">
          <li className="mb-10">
            <Card img={singsongLogo} title="Sing Song" action="May 2023">
              <Card.Subtitle>
                <a href="https://singsong.live" target="_blank" rel="noopener" className="no-color">
                  <span className="inline-flex items-center justify-center mr-2 rounded-full border border-green-600 px-4 py-1 hover:bg-green-600 hover:text-white">
                    <span>View Website</span>
                    <ExternalIcon className="inline-block w-2 h-2 ml-1 fill-current" />
                  </span>
                </a>
                <span className="inline-flex items-center justify-center rounded-full border border-red-600 px-4 py-1">
                  <RubyIcon className="inline-block w-3 h-3 mr-1 fill-current" />
                  <span>Ruby on Rails</span>
                </span>
              </Card.Subtitle>
              <Card.Text>
                Ever since I was 9 years old, one of my favourite hobbies has been playing guitar. I've always enjoyed playing songs for people and having everyone sing along. However when doing this I've run into a couple issues: Firstly, not everyone knows the lyrics to every song. This leads to people not singing along, or worse making everyone wait while they look up the lyrics to the song. Additionally, in large groups so many people request different songs and it's hard to remember all these requests. Sing Song solves all these issues and from using it so far it's been amazing for getting more people involved in sing-alongs and jam sessions.
              </Card.Text>
              <Card.Text>
                Try it for yourself by visiting <a href="https://singsong.live" target="_blank" rel="noopener" className="no-color underline">https://singsong.live</a>!
              </Card.Text>
            </Card>
          </li>
          <li className="mb-10">
            <Card img={spikesosLogo} title="Spike SOS Platform" action="April 2020">
              <Card.Subtitle>
                <span className="inline-flex items-center justify-center mr-2 rounded-full border border-yellow-400 px-4 py-1">
                    <DollarIcon className="inline-block w-3 h-3 fill-current" />
                    <span>Paid</span>
                  </span>
                  <span className="inline-flex items-center justify-center mr-2 rounded-full border border-green-500 px-4 py-1">
                    <NodeIcon className="inline-block w-3 h-3 mr-1 fill-current" />
                    <span>NodeJS</span>
                  </span>
                  <span className="inline-flex items-center justify-center rounded-full border border-blue-700 px-4 py-1">
                    <ReactIcon className="inline-block w-3 h-3 mr-1 fill-current" />
                    <span>React</span>
                  </span>
              </Card.Subtitle>
              <Card.Text>
                In January 2020 I was approached by a friend about working on a consulting project for a local business. The project was to create a platform where they could manage their storage bins that were being sent out across the city. Working as a solo developer with my friend as a PM, we built a system that did just that and released the final product to the client in April 2020. While the platform is hosted privately by the client, you can see screenshots of the project below and learn more about Spike On Site solutions by visiting <a href="https://spikesos.com" rel="noopener" target="_blank" class="no-color underline">their website</a>.
              </Card.Text>
              <Card.Carousel>
                <img src={spike1} className="w-full rounded-lg" />
                <img src={spike2} className="w-full rounded-lg" />
                <img src={spike3} className="w-full rounded-lg" />
                <img src={spike4} className="w-full rounded-lg" />
                <img src={spike5} className="w-full rounded-lg" />
                <img src={spike6} className="w-full rounded-lg" />
                <img src={spike7} className="w-full rounded-lg" />
                <img src={spike8} className="w-full rounded-lg" />
              </Card.Carousel>
            </Card>
          </li>
          <li>
            <Card img={tasktreeLogo} title="Task Tree" action="August 2019">
              <Card.Subtitle>
                <a href="https://github.com/joeytepp/task-tree" target="_blank" rel="noopener" className="no-color">
                  <span className="inline-flex items-center justify-center mr-2 rounded-full border border-green-600 px-4 py-1 hover:bg-green-600 hover:text-white">
                    <span>View Code</span>
                    <ExternalIcon className="inline-block w-2 h-2 ml-1 fill-current" />
                  </span>
                </a>
                <span className="inline-flex items-center justify-center mr-2 rounded-full border border-red-600 px-4 py-1">
                  <RubyIcon className="inline-block w-3 h-3 mr-1 fill-current" />
                  <span>Ruby on Rails</span>
                </span>
                <span className="inline-flex items-center justify-center rounded-full border border-blue-700 px-4 py-1">
                  <ReactIcon className="inline-block w-3 h-3 mr-1 fill-current" />
                  <span>React</span>
                </span>
              </Card.Subtitle>
              <Card.Text>
                After seeing a close friend of mine give a talk about GraphQL, I knew I wanted to try it out for myself. The first idea I had was to build a task manager that supported nested tasks, to take advantage of the structured queries supported by GraphQL. I built the front-end in React and used the <code>react_on_rails</code> gem to achieve server-side rendering. The back-end was built in Ruby on Rails and uses the <code>graphql-ruby</code> gem to implement the GraphQL API. Additionally, I used websockets and GraphQL subscriptions to achieve real-time updates across web clients. The project was a great learning experience and ended up even resulting in some open source contributions.
              </Card.Text>
              <Card.Carousel>
                <img src={tasktree1} className="w-full rounded-lg" />
                <img src={tasktree2} className="w-full rounded-lg" />
                <img src={tasktree3} className="w-full rounded-lg" />
                <img src={tasktree4} className="w-full rounded-lg" />
                <img src={tasktree5} className="w-full rounded-lg" />
                <img src={tasktree6} className="w-full rounded-lg" />
              </Card.Carousel>
            </Card>
          </li>
        </ul>
        <Link to="/" className="text-black dark:text-white">{"<  Back"}</Link>
      </div>
    </Layout>
  )
}
