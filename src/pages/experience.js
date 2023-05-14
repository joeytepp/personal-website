import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import Card from "../components/Card/Card"

import shopify from "../images/shopify.png"
import fcb from "../images/fcb.png"
import ExternalIcon from "../components/Externalcon"
import sprout from "../images/sprout.png"
import accurate from "../images/accurate.png"
import { Link } from "gatsby"

export default function ExperiencePage() {
  return (
    <Layout>
      <SEO title="Experience" />
      <div className="h-full w-full py-10 sm:px-32 px-8 text-xl">
        <h1 className="text-5xl mb-5 font-bold w-1/2 sm:w-full">Experience</h1>
        <p>In my career I've been fortunate to work at a wide variety of unique companies. In each company I've gained new skills, solved challenging problems and found ways to make an impact. Below is a summary of my recent experience.</p>
        <ul className="my-10">
          <li className="mb-5">
            <Card title="Shopify" img={shopify} action="May 2020 - May 2023">
              <Card.Subtitle>
                <a href="https://www.shopify.com/" target="_blank" rel="noopener" className="no-color">
                  <span className="inline-flex items-center justify-center mr-2 rounded-full border border-green-600 px-4 py-1 hover:bg-green-600 hover:text-white">
                    <span>View Website</span>
                    <ExternalIcon className="inline-block w-2 h-2 ml-1 fill-current" />
                  </span>
                </a>
                <span className="inline-flex items-center justify-center mr-2 rounded-full border border-black dark:border-white px-4 py-1">
                  <span>Senior Software Engineer</span>
                </span>
              </Card.Subtitle>
              <Card.Text>
                Shopify is a commerce platform that allows millions of merchants across the world to sell across multiple surfaces. I joined Shopify in May 2020 as a member of the <a href="https://shopify.engineering/performance-testing-shopify" rel="noopener" target="_blank" className="no-color underline">Platform Conditioning Team</a>. This team focused on building tooling and infrastructure to support load testing Shopify's platform in order to prepare for large sales events such as Black Friday and Cyber Monday. As a member of this team I made high quality contributions across many internal and external codebases, ran load tests (that exceeded 50 million requests per minute), mentored and onboarded interns and new hires, and contributed to Shopify's hiring efforts by running technical interviews. Later on in my time at Shopify I joined the Resilliency Acceleration team which worked in tandem with Shopify's incident response and site reliability teams to ensure that incidents could be handled quickly and effectively. Part of this included some key contributions to Shopify's custom <a href="https://www.shopifystatus.com" rel="noopener" target="_blank" class="no-color underline">status page</a>. Overall my experience at Shopify is something I'm truly grateful for, as I got to meet and work with some incredible people, and help contribute to Shopify's mission of making commerce better for everyone.
              </Card.Text>
            </Card>
          </li>
          <li className="mb-5">
            <Card title="FCB/SIX Consulting" action="Summer 2019" img={fcb} >
              <Card.Subtitle>
                <a href="https://www.fcbsix.com/" target="_blank" rel="noopener" className="no-color">
                  <span className="inline-flex items-center justify-center mr-2 rounded-full border border-green-600 px-4 py-1 hover:bg-green-600 hover:text-white">
                    <span>View Website</span>
                    <ExternalIcon className="inline-block w-2 h-2 ml-1 fill-current" />
                  </span>
                </a>
                <span className="inline-flex items-center justify-center mr-2 rounded-full border border-black dark:border-white px-4 py-1">
                  <span>Summer Intern</span>
                </span>
              </Card.Subtitle>
              <Card.Text>
                FCB/SIX Consulting is a marketing technology consultancy. At this job I focused primarily on building a web application for a client that wanted to monitor their competitors’ social output. The application pulled from blogs, emails, and social media and used Google Cloud Language APIs to classify every article into a topic and provide a concise summary of the topics being discussed by the client’s competitors. I built this application using NextJS, and implemented a large suite of unit tests using Jest as well as browser integration tests with Cypress. I also implemented Continuous Integration (CI) and Continuous Delivery (CD) using CircleCI, Docker, and Amazon EC2.
              </Card.Text>
            </Card>
          </li>
          <li className="mb-5">
            <Card title="Sprout At Work" action="Summer 2018" img={sprout}>
              <Card.Subtitle>
                <a href="https://www.sproutatwork.com/" target="_blank" rel="noopener" className="no-color">
                  <span className="inline-flex items-center justify-center mr-2 rounded-full border border-green-600 px-4 py-1 hover:bg-green-600 hover:text-white">
                    <span>View Website</span>
                    <ExternalIcon className="inline-block w-2 h-2 ml-1 fill-current" />
                  </span>
                </a>
                <span className="inline-flex items-center justify-center mr-2 rounded-full border border-black dark:border-white px-4 py-1">
                  <span>Backend Developer Intern</span>
                </span>
              </Card.Subtitle>
              <Card.Text>
              Sprout At Work is a health technology company that provides a mobile and web-based platform for workplace wellbeing. At this job I implemented new features and fixed bugs on their core application and their partners platform. This was my first time doing software development as a team and I learnt a lot about test-driven development (TDD), the agile methodology, using Git and GitHub effectively and writing production code. Some of the things I worked on in this role were building new REST APIs for new features, improving the efficiency of their integrations with wearable devices and refactoring SQL queries to make them more performant. The technologies I worked with were PHP, MySQL, and AngularJS.
              </Card.Text>
            </Card>
          </li>
          <li class="mb-5">
            <Card title="Accurate Rolal" action="Summer 2017" img={accurate}>
              <Card.Subtitle>
                <a href="https://bafoldingcartons.com/" target="_blank" rel="noopener" className="no-color">
                  <span className="inline-flex items-center justify-center mr-2 rounded-full border border-green-600 px-4 py-1 hover:bg-green-600 hover:text-white">
                    <span>View Website</span>
                    <ExternalIcon className="inline-block w-2 h-2 ml-1 fill-current" />
                  </span>
                </a>
                <span className="inline-flex items-center justify-center mr-2 rounded-full border border-black dark:border-white px-4 py-1">
                  <span>Engineering Intern</span>
                </span>
              </Card.Subtitle>
              <Card.Text>
              Accurate Rolal (now BA Folding Cartons) is a folding cartons manufacturer. I worked here the summer after my first year of university. I started off doing small tasks and helping out around the office but quickly found a large project to focus on. This project was helping them begin to automate their scheduling process for printing jobs. I did this by building a software application that displayed the current printing schedule and allowed admins to to change it using a drag and drop interface. I also created an algorithm to automatically schedule printing jobs in the future based on the availability of the equipment and the delivery date of the docket. I built this application using Java and MATLAB. After my internship I was hired on as a consultant to continue helping them with automation.
              </Card.Text>
            </Card>
          </li>
        </ul>
        <Link to="/" class="no-color">{'< Back'}</Link>
      </div>
    </Layout>
  )
}
