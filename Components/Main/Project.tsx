'use client'

import React from 'react'
import ProjectCard from '../Sub/ProjectCard'

const Project = () => {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl sm:text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-10 text-center">
        My Projects
      </h1>
      <div className="w-full h-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <ProjectCard
          src="/p1.png"
          title="A Modern Game"
          description="Modern TicTacToe game with a dark theme, colorful markers, and a playful 'Enjoy with TicTacToe' title, featuring a sleek Reset button."
        />
        <ProjectCard
          src="/p2.png"
          title="Ai Image Generator"
          description="Minimal AI image generator with a clean dark theme, featuring a prompt input, generate button, and a beautifully rendered sample image."
        />
        <ProjectCard
          src="/p3.png"
          title="Ecommerce Website"
          description="Trendy e-commerce landing page featuring new arrivals, a stylish model showcase, and easy navigation for Men, Women, and Kids collections."
        />
        {/* <ProjectCard
          src="/p4.png"
          title="Weather App"
          description="A modern weather search interface with a search bar, loading animation, and weather details on a dark blue gradient background."
        /> */}
        {/* Future Projects can be added here */}
      </div>
    </div>
  )
}

export default Project
