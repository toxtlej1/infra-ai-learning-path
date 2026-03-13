import React from 'react';
import { HeroUIProvider } from "@heroui/react";
import { Button, Card, CardBody, CardHeader, Divider, Link, Chip, Tooltip } from "@heroui/react";
import { Rocket, Brain, Eye, Hammer, ChevronRight, Github } from "lucide-react";
import { motion } from "framer-motion";

export const HeroSection = () => {
  return (
    <HeroUIProvider>
      <div className="flex flex-col gap-12 py-8">
        {/* Hero Content */}
        <section className="flex flex-col items-center text-center gap-6 px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Chip 
              color="primary" 
              variant="flat" 
              className="mb-4"
              startContent={<Rocket size={14} className="ml-1" />}
            >
              The Next Gen of Infra Engineers
            </Chip>
          </motion.div>
          
          <motion.h1 
            className="text-4xl md:text-6xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Build Without Fear. <br /> Master Infra with AI.
          </motion.h1>
          
          <motion.p 
            className="text-lg text-default-600 max-w-[700px]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Don't let AI replace you. Use it to amplify you. Learn foundational DevOps concepts through simple analogies and master AI as your senior mentor.
          </motion.p>
          
          <motion.div 
            className="flex flex-wrap gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Button 
              as={Link} 
              href="module-1-cloud/" 
              color="primary" 
              size="lg" 
              radius="full" 
              endContent={<ChevronRight size={18} />}
              className="font-semibold shadow-lg shadow-blue-500/30"
            >
              Start Learning
            </Button>
            <Button 
              as={Link} 
              href="https://github.com/toxtlej1/infra-ai-learning-path" 
              variant="bordered" 
              size="lg" 
              radius="full" 
              startContent={<Github size={18} />}
              className="font-semibold"
            >
              View GitHub
            </Button>
          </motion.div>
        </section>

        <Divider className="my-4 opacity-50" />

        {/* Feature Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
          <FeatureCard 
            icon={<Hammer className="text-blue-500" />}
            title="Infra Fundamentals"
            description="Master VPCs, Networking, Containers, and K8s from the ground up."
            delay={0.4}
          />
          <FeatureCard 
            icon={<Brain className="text-indigo-500" />}
            title="Feynman Technique"
            description="We simplify complex architecture into relatable, 5th-grade analogies."
            delay={0.5}
          />
          <FeatureCard 
            icon={<Rocket className="text-purple-500" />}
            title="AI-Native Engineer"
            description="Learn to prompt AI to weigh trade-offs and debug complex pipelines."
            delay={0.6}
          />
          <FeatureCard 
            icon={<Eye className="text-pink-500" />}
            title="Hands-On Visuals"
            description="Rich Mermaid.js diagrams to help you see how everything connects."
            delay={0.7}
          />
        </section>
      </div>
    </HeroUIProvider>
  );
};

const FeatureCard = ({ icon, title, description, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
    >
      <Card className="h-full border-none bg-default-100/50 dark:bg-default-50/10 backdrop-blur-md" isHoverable isPressable>
        <CardHeader className="flex gap-3 px-4 pt-4">
          <div className="p-2 bg-white dark:bg-default-100 rounded-lg shadow-sm">
            {icon}
          </div>
          <p className="text-md font-bold">{title}</p>
        </CardHeader>
        <CardBody className="px-4 pb-4">
          <p className="text-sm text-default-500 leading-relaxed">{description}</p>
        </CardBody>
      </Card>
    </motion.div>
  );
};
