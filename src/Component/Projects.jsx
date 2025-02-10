"ues client";
import React, { useState } from 'react'

import ProjectCard from './ProjectCard'
import ProjectTag from './ProjectTag'

import {
  khamsat,
  bondi,
  portfolio,
  restaurant,
  criativo,
  botiga,
  rosebud,
  timeZone,
  stopwatch,
  mexant,
  newHome,
  coffee,
} from '../../src/imges/projects';





const projectsData = [
  {
    id: 12,
    title: "Coffee",
    description: "coffee is a website for buying and selling coffee online",
    image: coffee,
    tag: ["All", "React"],
    gitUrl: "",
    previewUrl: ""
  },
  {
    id: 11,
    title: "Portfolio",
    description: "portfolio is a website for show my projects",
    image: portfolio,
    tag: ["All", "React"],
    gitUrl: "https://github.com/Ahmed-Gehad/ahmedGehadPortfolio",
    previewUrl: "https://ahmed-gehad-portfolio-3rvd.vercel.app/"
  },
  {
    id: 10,
    title: "New Home",
    description: "new-home is a website for buying and selling Bulding online",
    image: newHome,
    tag: ["All", "React"],
    gitUrl: "https://github.com/Ahmed-Gehad/new-home",
    previewUrl: "https://new-home-e7gk.vercel.app/"
  },
  {
    id: 9,
    title: "Mexant",
    description: "mexant is a website for buying and selling online",
    image: mexant,
    tag: ["All", "React"],
    gitUrl: "https://github.com/Ahmed-Gehad/mexant-app",
    previewUrl: "https://mexant-app-ten.vercel.app"
  },
  {
    id: 8,
    title: "Stopwatch",
    description: "stopwatch is a website for stopwatch app",
    image: stopwatch,
    tag: ["All", "JS"],
    gitUrl: "https://github.com/Ahmed-Gehad/stopwatch",
    previewUrl: "https://stopwatch-rust-delta.vercel.app"
  },
  {
    id: 7,
    title: "Time Zone",
    description: "portfolio is a website for buying and selling watch online",
    image: timeZone,
    tag: ["All", "Bootstrap"],
    gitUrl: "https://github.com/Ahmed-Gehad/Time-Zone",
    previewUrl: "https://time-zone-lime.vercel.app"
  },
  {
    id: 6,
    title: "Rosebud",
    description: "portfolio is a website for buying and selling flowers online",
    image: rosebud,
    tag: ["All", "Bootstrap"],
    gitUrl: "https://github.com/Ahmed-Gehad/rosebud",
    previewUrl: "https://rosebud-rose.vercel.app"
  },
  {
    id: 5,
    title: "Botiga",
    description: "portfolio is a website for buying and selling makeup online",
    image: botiga,
    tag: ["All", "Bootstrap"],
    gitUrl: "https://github.com/Ahmed-Gehad/Botiga",
    previewUrl: "https://botiga-dun.vercel.app"
  },
  {
    id: 4,
    title: "Criativo",
    description: "portfolio is a website for marketing and selling online",
    image: criativo,
    tag: ["All", "Bootstrap"],
    gitUrl: "https://github.com/Ahmed-Gehad/criativo-app",
    previewUrl: "https://criativo-app-delta.vercel.app/"
  },
  {
    id: 3,
    title: "Restaurant",
    description: "restaurant is a website for selling and buying food online",
    image: restaurant,
    tag: ["All", "HTML,CSS"],
    gitUrl: "https://github.com/Ahmed-Gehad/restaurant",
    previewUrl: "https://restaurant-ashy-iota.vercel.app/"
  },


  {
    id: 1,
    title: "Khamsat",
    description: "khamsat is a website for selling and buying books online",
    image: khamsat,
    tag: ["All", "HTML,CSS"],
    gitUrl: "https://github.com/Ahmed-Gehad/khamsat-app",
    previewUrl: "https://khamsat-app.vercel.app/"
  },
  {
    id: 2,
    title: "Bondi",
    description: "bondi is a website for selling and buying games online",
    image: bondi,
    tag: ["All", "HTML,CSS"],
    gitUrl: "https://github.com/Ahmed-Gehad/bondi",
    previewUrl: "https://ahmed-gehad.github.io/bondi/"
  }


]

const Projects = () => {

  const [tag, setTag] = useState("All");
  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  return (
    <div id='Projects'>
      <h2 className='text-center text-4xl font-bold text-orange mt-4 '>My Projects</h2>
      <div className="line my-4 mx-auto"></div>

      <div className='text-white flex flex-row justify-center items-center gap-1 py-9'>
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="HTML,CSS"
          isSelected={tag === "HTML,CSS"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Bootstrap"
          isSelected={tag === "Bootstrap"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="React"
          isSelected={tag === "React"}
        />
      </div>
      
      <div className='grid md:grid-cols-3 gap-8 md:gap-1 px-3 '>{filteredProjects.map((project) => (
        <ProjectCard
          key={project.id}
          title={project.title}
          description={project.description}
          imgUrl={project.image}
          tag={project.tag}
          gitUrl={project.gitUrl}
          previewUrl={project.previewUrl}
        />
      ))}
      </div>
    </div>
  );
}

export default Projects