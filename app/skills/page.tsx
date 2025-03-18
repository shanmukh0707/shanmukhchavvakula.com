"use client"

import Layout from "../components/Layout"
import SkillBar from "../components/SkillBar"
import { motion } from "framer-motion"

export default function Skills() {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  }

  return (
    <Layout>
      <motion.section className="py-20 px-4 md:px-8 pl-16" {...fadeInUp} viewport={{ once: false }}>
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold mb-10 text-center">My Skills</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            <SkillBar skill="React" percentage={90} />
            <SkillBar skill="Next.js" percentage={85} />
            <SkillBar skill="TypeScript" percentage={80} />
            <SkillBar skill="UI/UX Design" percentage={75} />
            <SkillBar skill="Node.js" percentage={70} />
            <SkillBar skill="GraphQL" percentage={65} />
            <SkillBar skill="Python" percentage={60} />
            <SkillBar skill="Docker" percentage={55} />
          </div>
        </div>
      </motion.section>
    </Layout>
  )
}

