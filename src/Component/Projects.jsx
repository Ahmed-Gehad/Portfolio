"use client";
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import ProjectCard from './ProjectCard'
// import ProjectTag from './ProjectTag'



import khamsat from '../imges/projects/khamsat.png'
import bondi from '../imges/projects/bondi.png'
import portfolio from '../imges/projects/portfolio.png'
import restaurant from '../imges/projects/restaurant.png'
import criativo from '../imges/projects/criativo.png'
import botiga from '../imges/projects/Botigaa.png'
import rosebud from '../imges/projects/rosebud.png'
import timeZone from '../imges/projects/timeZone.png'
import stopwatch from '../imges/projects/stopwatch.png'
import mexant from '../imges/projects/mexant.png'
import newHome from '../imges/projects/new-home.png'
import coffee from '../imges/projects/coffee.jpg'


// const projectsData = [
//   {
//     id: 1,
//     title: "Khamsat",
//     description: "khamsat is a website for selling and buying books online",
//     image: './images/khamsat.png',
//     tag: ["All", "HTML,CSS"],
//     gitUrl: "https://github.com/Ahmed-Gehad/khamsat-app",
//     previewUrl: "https://khamsat-app.vercel.app/"
//   },
//   {
//     id: 2,
//     title: "Bondi",
//     description: "bondi is a website for selling and buying games online",
//     image: './bondi.png',
//     tag: ["All", "HTML,CSS"],
//     gitUrl: "https://github.com/Ahmed-Gehad/bondi",
//     previewUrl: "https://ahmed-gehad.github.io/bondi/"
//   },
//   {
//     id: 3,
//     title: "Restaurant",
//     description: "restaurant is a website for selling and buying food online",
//     image: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg',
//     tag: ["All", "HTML,CSS"],
//     gitUrl: "https://github.com/Ahmed-Gehad/restaurant",
//     previewUrl: "https://restaurant-ashy-iota.vercel.app/"
//   },
//   {
//     id: 4,
//     title: "Criativo",
//     description: "portfolio is a website for marketing and selling online",
//     image: 'src\imges\projects\criativo.png',
//     tag: ["All", "Bootstrap"],
//     gitUrl: "https://github.com/Ahmed-Gehad/criativo-app",
//     previewUrl: "https://criativo-app-delta.vercel.app/"
//   },
//   {
//     id: 5,
//     title: "Botiga",
//     description: "portfolio is a website for buying and selling makeup online",
//     image: '../imges/projects/Botigaa.png',
//     tag: ["All", "Bootstrap"],
//     gitUrl: "https://github.com/Ahmed-Gehad/Botiga",
//     previewUrl: "https://botiga-dun.vercel.app"
//   },
//   {
//     id: 6,
//     title: "Rosebud",
//     description: "portfolio is a website for buying and selling flowers online",
//     image: '../imges/projects/rosebud.png',
//     tag: ["All", "Bootstrap"],
//     gitUrl: "https://github.com/Ahmed-Gehad/rosebud",
//     previewUrl: "https://rosebud-rose.vercel.app"
//   },
//   {
//     id: 7,
//     title: "Time Zone",
//     description: "portfolio is a website for buying and selling watch online",
//     image: '/imges/projects/time-zone.png',
//     tag: ["All", "Bootstrap"],
//     gitUrl: "https://github.com/Ahmed-Gehad/Time-Zone",
//     previewUrl: "https://time-zone-lime.vercel.app"
//   },
//   {
//     id: 8,
//     title: "Stopwatch",
//     description: "stopwatch is a website for stopwatch app",
//     image: '../imges/projects/stopwatch.png',
//     tag: ["All", "JS"],
//     gitUrl: "https://github.com/Ahmed-Gehad/stopwatch",
//     previewUrl: "https://stopwatch-rust-delta.vercel.app"
//   },
//   {
//     id: 9,
//     title: "Mexant",
//     description: "mexant is a website for buying and selling online",
//     image: '../imges/projects/mexant.png',
//     tag: ["All", "React"],
//     gitUrl: "https://github.com/Ahmed-Gehad/mexant-app",
//     previewUrl: "https://mexant-app-ten.vercel.app"
//   },
//   {
//     id: 10,
//     title: "New Home",
//     description: "new-home is a website for buying and selling Bulding online",
//     image: '../imges/projects/new-home.png',
//     tag: ["All", "React"],
//     gitUrl: "https://github.com/Ahmed-Gehad/new-home",
//     previewUrl: "https://new-home-e7gk.vercel.app/"
//   },
//   {
//     id: 11,
//     title: "Portfolio",
//     description: "portfolio is a website for show my projects",
//     image: '../imges/projects/portfolio.png',
//     tag: ["All", "React"],
//     gitUrl: "https://github.com/Ahmed-Gehad/ahmedGehadPortfolio",
//     previewUrl: "https://ahmed-gehad-portfolio-3rvd.vercel.app/"
//   }
// ]

const Projects = () => {
  // const [tag, setTag] = useState("All")

  // const handleTagChange = (newTag) => {
  //   setTag(newTag);
  // };

  //   const filteredProjects = projectsData.filter((project) => 
  //     project.tag.includes(tag)
  // );

  return (
    <div className='projects text-white my-5 px-4' id='Projects'>
      <Container>
        <Row>
          <Col lg={12} className='text-center '>
            <h1 className='text-orange fw-bold'>My Projects</h1>
            <div className="line my-4 mx-auto"></div>
          </Col>


          {/* <Col lg={12} xs={12} className='text-center my-4'>
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
              name="JS"
              isSelected={tag === "JS"}
            />
            <ProjectTag
              onClick={handleTagChange}
              name="React"
              isSelected={tag === "React"}
            />
          </Col> */}
          <Col lg={4} md={6} sm={6} xs={12} className='my-4'>
            <div className=''>
              {/* {filteredProjects.map((project) => ( */}
              <ProjectCard
                title='Coffee'
                description='Coffee Shop Website'
                imgUrl={coffee}
                gitUrl='https://github.com/Ahmed-Gehad/coffee'
                previewUrl='https://coffee-ashen-eta.vercel.app/'
              />
              {/* ))} */}
            </div>
          </Col>
          <Col lg={4} md={6} sm={6} xs={12} className='my-4'>
            <div className=''>
              {/* {filteredProjects.map((project) => ( */}
              <ProjectCard
                title='Portfolio'
                description='portfolio is a website for show my projects'
                imgUrl={portfolio}
                gitUrl='https://github.com/Ahmed-Gehad/ahmedGehadPortfolio'
                previewUrl='https://ahmed-gehad-portfolio-3rvd.vercel.app/'
              />
              {/* ))} */}
            </div>
          </Col>
          <Col lg={4} md={6} sm={6} xs={12} className='my-4'>
            <div className=''>
              {/* {filteredProjects.map((project) => ( */}
              <ProjectCard
                title='New Home'
                description='new-home is a website for buying and selling Bulding online'
                imgUrl={newHome}
                gitUrl='https://github.com/Ahmed-Gehad/new-home'
                previewUrl='https://new-home-e7gk.vercel.app/'
              />
              {/* ))} */}
            </div>
          </Col>
          <Col lg={4} md={6} sm={6} xs={12} className='my-4'>
            <div className=''>
              {/* {filteredProjects.map((project) => ( */}
              <ProjectCard
                title='Mexant'
                description='mexant is a website for buying and selling online'
                imgUrl={mexant}
                gitUrl='https://github.com/Ahmed-Gehad/mexant-app'
                previewUrl='https://mexant-app-ten.vercel.app'
              />
              {/* ))} */}
            </div>
          </Col>
          <Col lg={4} md={6} sm={6} xs={12} className='my-4'>
            <div className=''>
              {/* {filteredProjects.map((project) => ( */}
              <ProjectCard
                title='Stopwatch'
                description='stopwatch is a website for stopwatch app'
                imgUrl={stopwatch}
                gitUrl='https://github.com/Ahmed-Gehad/stopwatch'
                previewUrl='https://stopwatch-rust-delta.vercel.app'
              />
              {/* ))} */}
            </div>
          </Col>
          <Col lg={4} md={6} sm={6} xs={12} className='my-4'>
            <div className=''>
              {/* {filteredProjects.map((project) => ( */}
              <ProjectCard
                title='Time Zone'
                description='portfolio is a website for buying and selling watch online'
                imgUrl={timeZone}
                gitUrl='https://github.com/Ahmed-Gehad/Time-Zone'
                previewUrl='https://time-zone-lime.vercel.app'
              />
              {/* ))} */}
            </div>
          </Col>

          <Col lg={4} md={6} sm={6} xs={12} className='my-4'>
            <div className=''>
              {/* {filteredProjects.map((project) => ( */}
              <ProjectCard
                title='Rosebud'
                description='portfolio is a website for buying and selling flowers online'
                imgUrl={rosebud}
                gitUrl='https://github.com/Ahmed-Gehad/rosebud'
                previewUrl='https://rosebud-rose.vercel.app/'
              />
              {/* ))} */}
            </div>
          </Col>
          <Col lg={4} md={6} sm={6} xs={12} className='my-4'>
            <div className=''>
              {/* {filteredProjects.map((project) => ( */}
              <ProjectCard
                title='Botiga'
                description='portfolio is a website for buying and selling makeup online'
                imgUrl={botiga}
                gitUrl='https://github.com/Ahmed-Gehad/Botiga'
                previewUrl='https://botiga-dun.vercel.app'
              />
              {/* ))} */}
            </div>
          </Col>




          <Col lg={4} md={6} sm={6} xs={12} className='my-4'>
            <div className=''>
              {/* {filteredProjects.map((project) => ( */}
              <ProjectCard
                title='Bondi'
                description="bondi is a website for selling and buying games online"
                imgUrl={bondi}
                gitUrl="https://github.com/Ahmed-Gehad/bondi"
                previewUrl="https://ahmed-gehad.github.io/bondi/"
              />
              {/* ))} */}
            </div>
          </Col>





          <Col lg={4} md={6} sm={6} xs={12} className='my-4'>
            <div className=''>
              {/* {filteredProjects.map((project) => ( */}
              <ProjectCard
                title='Restaurant'
                description='restaurant is a website for selling and buying food online'
                imgUrl={restaurant}
                gitUrl='https://github.com/Ahmed-Gehad/restaurant'
                previewUrl='https://restaurant-ashy-iota.vercel.app/'
              />
              {/* ))} */}
            </div>
          </Col>


          <Col lg={4} md={6} sm={6} xs={12} className='my-4'>
            <div className=''>
              {/* {filteredProjects.map((project) => ( */}
              <ProjectCard
                title='Criativo'
                description='portfolio is a website for marketing and selling online'
                imgUrl={criativo}
                gitUrl='https://github.com/Ahmed-Gehad/criativo-app'
                previewUrl='https://criativo-app-delta.vercel.app/'
              />
              {/* ))} */}
            </div>
          </Col>






          <Col lg={4} md={6} sm={6} xs={12} className='my-4'>
            <div className=''>
              {/* {filteredProjects.map((project) => ( */}
              <ProjectCard
                title='Khamsat'
                description='khamsat is a website for selling and buying books online'
                imgUrl={khamsat}
                gitUrl='https://github.com/Ahmed-Gehad/khamsat-app'
                previewUrl='https://khamsat-app.vercel.app/'
              />
              {/* ))} */}
            </div>
          </Col>









        </Row>
      </Container>
    </div>
  )
}

export default Projects