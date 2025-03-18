"use client"

import Layout from "../components/Layout"
import ProjectCard from "../components/ProjectCard"
import { motion } from "framer-motion"

export default function Projects() {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  }

  return (
    <Layout>
      <motion.section className="py-20 px-4 md:px-8 pl-16" {...fadeInUp} viewport={{ once: false }}>
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold mb-10 text-center">My Projects</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProjectCard
              title="Project 1"
              description="A brief description of Project 1"
              image="/placeholder.svg?height=200&width=300"
            />
            <ProjectCard
              title="Project 2"
              description="A brief description of Project 2"
              image="/placeholder.svg?height=200&width=300"
            />
            <ProjectCard
              title="Project 3"
              description="A brief description of Project 3"
              image="/placeholder.svg?height=200&width=300"
            />
            <ProjectCard
              title="Project 4"
              description="A brief description of Project 4"
              image="/placeholder.svg?height=200&width=300"
            />
            <ProjectCard
              title="Project 5"
              description="A brief description of Project 5"
              image="/placeholder.svg?height=200&width=300"
            />
            <ProjectCard
              title="Project 6"
              description="A brief description of Project 6"
              image="/placeholder.svg?height=200&width=300"
            />
          </div>
        </div>
      </motion.section>
    </Layout>
  )
}

