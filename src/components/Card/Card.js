import React from "react"
import { Carousel } from "flowbite-react"

export default function Card(props) {
  return (
    <div className="w-full px-5 py-2 border border-gray-200 rounded-lg shadow dark:bg-slate-700 dark:border-slate-500">
      <div className="flex items-center">
        <div>
          <img src={props.img} className="w-10" />
        </div>
        <div className="flex-1 mx-2">
          <h1 className="font-semibold">{props.title}</h1>
        </div>
        <div className="text-sm">
          <p>{props.action}</p>
        </div>
      </div>
      {props.children}
    </div>
  )
}

Card.Subtitle = function(props) {
  return (
    <div className="text-xs my-2">
      {props.children}
    </div>
  )
}

Card.Text = function(props) {
  return (
    <div className="text-base mt-3">
      {props.children}
    </div>
  )
}

Card.Carousel = function(props) {
  return (
    <div className="sm:h-60 sm:w-80 md:h-72 md:w-96 h-40 w-60 mx-auto my-5 rounded-lg">
      <Carousel>
        {props.children}
      </Carousel>
    </div>
  )
}
