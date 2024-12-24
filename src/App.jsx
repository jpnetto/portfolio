import { useState } from 'react'
import emailjs from 'emailjs-com'
import githubLogo from './assets/github.png'
import linkedinLogo from './assets/linkedin.png'
import ContactForm from './contactForm'


function App() {

  return (
    <>
      <header className="flex flex-row fixed bg-black w-full shadow-md py-5 px-6 border-b border-fireRed border-opacity-60"> 
        <div className="flex-1">
          <h1 className="text-2xl text-white">João Pedro Netto</h1>
        </div>
        <nav className="flex-1 text-center">
        </nav> 
        <div className="flex-1 text-right">
          <a href="#home" className="mx-5 text-2xl text-white font-mono hover:text-fireRed transition duration-300">Home</a>
          <a href="#projects" className="mx-5 text-2xl text-white font-mono hover:text-fireRed transition duration-300">Projects</a>
          <a href="#contact" className="mx-5 text-2xl text-white font-mono hover:text-fireRed transition duration-300">Contact</a> 

        </div>
      </header> 
      <div className="min-h-screen bg-gradient-to-br from-eerieBlack to-jet text-white flex flex-col justify-center items-center font-sans"> 
        <main id="home" className="min-h-screen flex-grow flex flex-col justify-center items-center"> 
          <section className="text-center"> 
            <h2 className="text-3xl text-fireRed font-semibold  mb-5">Computer Technician, Fullstack Developer & Versatile</h2>
            <p className="text2sm text-white font-mono mb-4">I design and code beautifully simple things, and I love what I do. </p>
    
          </section> 
          
          <section className="text-center"> 
            <button className="p-0 mr-3 border-none bg-transparent" onClick={() => window.location.href='https://github.com/jpnetto'} >
              <img src={githubLogo} alt="Contact Me" className=" hover:opacity-75 transition duration-300" /> 
            </button>
            <button className="p-0 mr-3 border-none bg-transparent" onClick={() => window.location.href='https://www.linkedin.com/in/jo%C3%A3o-pedro-netto-lima-59323931b/'} >
              <img src={linkedinLogo} alt="Contact Me" className=" hover:opacity-75 transition duration-300" /> 
            </button>
          </section>
        </main> 
        <section id="projects" className="min-h-screen w-full bg-black flex flex-col items-center">
          <div className="flex flex-row w-11/12 p-4 mt-20 bg-opacity-50 shadow-md rounded-lg">
          
            <div className="overflow-y-auto w-full">
              <h2 className="text-2xl font-semibold ml-10 mb-6">Profissional Experience</h2>
              <div className="overflow-y-auto h-96 p-4 mx-6 bg-jet bg-opacity-50 shadow-md rounded-lg">
                <div className="space-y-4"> 
                  {/* Add project cards here */}
                  <div className="bg-jet bg-opacity-50 shadow-md rounded-lg p-6 hover:bg-fireRed transition duration-300">
                    <h3 className="text-lg font-semibold mb-2">Computer Technician (2022-2024)</h3>
                    <p className="text-gray-300">Studied at the Centro Federal de Educação Tecnológica de Minas Gerais - Campus Leopoldina.</p>
                  </div>
                <div className="bg-jet bg-opacity-50 shadow-md rounded-lg p-6 hover:bg-fireRed transition duration-300">
                  <h3 className="text-lg font-semibold mb-2">SICRO (2024-2025)</h3> <p className="text-gray-300">Intership as a computer technician and web developer for the Sistemas Inteligentes e Controle Robóticos Laboratory.</p>
                </div> 
                
                  {/* Repeat for more projects */}
                  </div>
              </div>
            </div>
            <div className="overflow-y-auto w-full">

              <h2 className="text-2xl font-semibold ml-10 mb-6">Projects</h2>
              <div className="overflow-y-auto h-96 p-4 mx-6 bg-jet bg-opacity-50 shadow-md rounded-lg">
                <div className="space-y-4">
                  {/* Add more project cards here */}
                  <div className="bg-jet bg-opacity-50 shadow-md rounded-lg p-6 hover:bg-fireRed transition duration-300">
                    <h3 className="text-lg font-semibold mb-2">AppArt: Venda de Artesanatos</h3>
                    <p className="text-gray-300 mb-4">Coordinated a 2-3 member's squad that developed a mobile marketplace for the local craft fair.</p>
                    <div className="flex flex-row content-center">
                      <p className="text-base font-semibold mr-2">Technologies Used: </p>           
                      <img align="center" alt= "Joao-ReactNative" height="30" width="30" className="mr-2" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" />                
                      <img align="center" alt= "Joao-Nodejs" height="30" width="30" className="mr-2" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-plain-wordmark.svg" />
                      <img align="center" alt= "Joao-Mysql" height="30" width="30" className="mr-2" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg"></img>
                    </div>
                  </div>
                  <div className="bg-jet bg-opacity-50 shadow-md rounded-lg p-6 hover:bg-fireRed transition duration-300">
                    <h3 className="text-lg font-semibold mb-2">Site Portfolio</h3>
                    <p className="text-gray-300 mb-4">Developed a simple site to share experiences and projects with the community.</p>
                    <div className="flex flex-row content-center">
                      <p className="text-base font-semibold mr-2">Technologies Used: </p>           
                      <img align="center" alt= "Joao-ReactNative" height="30" width="30" className="mr-2" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" />                
                      <img align="center" alt= "Joao-Nodejs" height="30" width="30" className="mr-2" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
          <section id='contact' className="min-h-screen w-full flex flex-row">
            <div className="flex flex-col w-1/2 flex items-center">
              <h2 className="text-3xl text-white font-semibold mt-20 mb-5">Any interest in my projects or ideas?</h2>
              <p className="text2sm text-white mx-12 mb-4">If you find something that arouse your interest, don't hesitate to reach out. I'm always excited to connect with fellow enthusiasts or potential collaborators. Send me a message today to talk how we can create something great together!</p>
            </div>
            <div className="flex flex-col w-1/2 flex items-center flex justify-center">
              <ContactForm></ContactForm>
            </div>
          </section> 
      </div>
    </>
  )
}

export default App
