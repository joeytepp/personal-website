import React, { useEffect } from "react"

import GithubIcon from "../GithubIcon"
import LinkedinIcon from "../LinkedinIcon"
import MailIcon from "../MailIcon"
import { Link } from "gatsby"

export default function Centerpiece() {
  const [rotation, setRotation] = React.useState(0.0)
  const [speed, setSpeed] = React.useState(0.2)

  useEffect(() => {
    requestAnimationFrame(() => {
      setRotation(rotation + speed)
    })
  }, [rotation, speed])

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="relative w-full max-w-2xl flex justify-center items-center h-screen">
        <svg className="w-full h-full" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <g className="hover:bg-black" style={{transformOrigin: "50% 50%", transform: `rotate(${rotation}deg)`}} onMouseOver={() => setSpeed(0.0)} onMouseLeave={() => setSpeed(0.2)} >
            <Link to="/about" className="dark:hover:brightness-90 hover:brightness-110">
              <path id="about" d="M 100,20 A 80,80 0 0 1 180,100" className="stroke-rose-700" strokeWidth="25" fill="none" />
              <text className="text-white font-bold text-lg text-center" dy="5" dx="2">
                <textPath href="#about" className="fill-current" startOffset="50%" textAnchor="middle">About</textPath>
              </text>
            </Link>
            <Link to="/projects" className="dark:hover:brightness-90 hover:brightness-110">
              <path id="projects" d="M 180,100 A 80,80 0 0 1 100,180" className="stroke-yellow-700" strokeWidth="25" fill="none" />
              <text className="text-white font-bold text-lg text-center" dy="5" dx="2">
                <textPath href="#projects" className="fill-current"startOffset="50%" textAnchor="middle">Projects</textPath>
              </text>
            </Link>
            <Link to="/experience" className="dark:hover:brightness-90 hover:brightness-110">
              <path id="experience" d="M 100,180 A 80,80 0 0 1 20,100" className="stroke-cyan-700" strokeWidth="25" fill="none" />
              <text className="text-white font-bold text-lg text-center" dy="5" dx="2">
                <textPath href="#experience" className="fill-current"startOffset="50%" textAnchor="middle">Experience</textPath>
              </text>
            </Link>
            <Link to="/open-source" className="dark:hover:brightness-90 hover:brightness-110">
              <path id="open-source" d="M 20,100 A 80,80 0 0 1 100,20" className="stroke-violet-700" strokeWidth="25" fill="none" />
              <text className="text-white font-bold text-lg text-center" dy="5" dx="2">
                <textPath href="#open-source" className="fill-current" startOffset="50%" textAnchor="middle">Open Source</textPath>
              </text>
            </Link>
          </g>
          <text x="100" y="60" textAnchor="middle" alignmentBaseline="central" className="dark:fill-white font-bold text-base text-center">
            Joey
          </text>
          <text x="100" y="75" textAnchor="middle" alignmentBaseline="central" className="dark:fill-white font-bold text-base text-center">
            Tepperman
          </text>
          <text x="100" y="95" textAnchor="middle" alignmentBaseline="central" className="dark:fill-white text-xs text-center">
            Software Engineer
          </text>
          <a target="_blank" rel="noreferrer" href="https://github.com/joeytepp" className="text-black hover:text-gray-500 dark:text-white dark:hover:text-gray-200">
            <rect x="53" y="110" width="25" height="25" fill="transparent"/>
            <GithubIcon className="inline fill-current" height="25" x="-35" y="110" />
          </a>
          <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/joeytepp" className="text-black hover:text-gray-500 dark:text-white dark:hover:text-gray-200">
            <rect x="88" y="110" width="25" height="25" fill="transparent"/>
            <LinkedinIcon className="inline fill-current" height="25" x="0" y="110" />
          </a>
          <a target="_blank" rel="noreferrer" href="mailto:joeytepperman@gmail.com" className="text-black hover:text-gray-500 dark:text-white dark:hover:text-gray-200">
            <rect x="123" y="110" width="25" height="25" fill="transparent"/>
            <MailIcon className="inline fill-current" height="25" x="35" y="110" />
          </a>
        </svg>
      </div>
    </div>
  )
}
