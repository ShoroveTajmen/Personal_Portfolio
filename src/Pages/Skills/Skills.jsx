import html5 from '../../assets/html5.webp';
import css3 from '../../assets/css3.jpg';
import js from '../../assets/js.png';
import bootstrap from '../../assets/bootstrap5.webp';
import reactjs from '../../assets/react.webp';
import materialUI from '../../assets/material ui.png';
import nodejs from '../../assets/nodejs.png';
import expressjs from '../../assets/expressjs.png';
import mongoDB from '../../assets/mongodb.png';
import firebase from '../../assets/firebase.png';
import github from '../../assets/github.webp';
import c from '../../assets/c.png';
import java from '../../assets/java.png';
import mysql from '../../assets/mysql.png';
import git from '../../assets/git.jpg';



const Skills = () => {
  return (
    <div>
      <h1 className="text-center font-bold text-[50px] uppercase mt-[60px]">My Skills</h1>
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  lg:gap-5  md:w-[770px] w-[350px] lg:w-[1200px] mx-auto mt-[30px] md:mt-[70px] md:mb-[70px] md:ml-[10px] ml-[30px] lg:ml-[50px]">
        {/* frontend */}
        <div className="w-[350px] h-[300px] border-2 border-red-600">
            <h1 className="text-center font-bold text-[30px]">Frontend</h1>
            <hr className="border-2 w-[300px] mx-auto" />
            <div className='mt-[20px] grid grid-cols-3 p-5 ml-[20px]'>
               <div>
               <img className='w-[60px] h-[60px]' src={html5} alt="" />
               <h1>HTML5</h1>
               </div>
               <div>
               <img className='w-[60px] h-[60px]' src={css3} alt="" />
               <h1>CSS3</h1>
               </div>
               <div>
               <img className='w-[60px] h-[60px]' src={js} alt="" />
               <h1>JavaScript</h1>
               </div>
                <div>
                <img className='w-[60px] h-[60px]' src={bootstrap} alt="" />
                <h1>BootStrap5</h1>
                </div>
                <div>
                <img className='w-[60px] h-[60px]' src={reactjs} alt="" />
                <h1>ReactJS</h1>
                </div>
             <div>
             <img className='w-[60px] h-[60px]' src={materialUI} alt="" />
             <h1>MaterialUI</h1>
             </div>
            </div>

        </div>
        {/* backend */}
        <div className="w-[350px] h-[300px] border-2 border-red-600">
            <h1 className="text-center font-bold text-[30px]">Backend</h1>
            <hr className="border-2 w-[300px] mx-auto" />
            <div className='mt-[20px] grid grid-cols-3 p-5 ml-[20px]'>
               <div>
               <img className='w-[60px] h-[60px]' src={nodejs} alt="" />
               <h1>NodeJS</h1>
               </div>
               <div>
               <img className='w-[60px] h-[60px]' src={expressjs} alt="" />
               <h1>Express JS</h1>
               </div>
               <div>
               <img className='w-[60px] h-[60px]' src={mongoDB} alt="" />
               <h1>MongoDB</h1>
               </div>
            </div>

        </div>
        {/* hosting platform */}
        <div className="w-[350px] h-[300px] border-2 border-red-600">
            <h1 className="text-center font-bold text-[30px]">Hosting</h1>
            <hr className="border-2 w-[300px] mx-auto" />
            <div className='mt-[20px] grid grid-cols-3 p-5 ml-[20px]'>
               <div>
               <img className='w-[60px] h-[60px]' src={firebase} alt="" />
               <h1>Firebase</h1>
               </div>
               <div>
               <img className='w-[80px] h-[60px]' src={github} alt="" />
               <h1>Github</h1>
               </div>
            </div>

        </div>
        {/* programming language */}
        <div className="w-[350px] h-[300px] border-2 border-red-600">
            <h1 className="text-center font-bold text-[30px]">Programming Languages</h1>
            <hr className="border-2 w-[300px] mx-auto" />
            <div className='mt-[20px] grid grid-cols-3 p-5 ml-[20px]'>
               <div>
               <img className='w-[60px] h-[60px]' src={js} alt="" />
               <h1>JavaScript</h1>
               </div>
               <div>
               <img className='w-[60px] h-[60px]' src={c} alt="" />
               <h1>C</h1>
               </div>
               <div>
               <img className='w-[60px] h-[60px]' src={java} alt="" />
               <h1>JAVA</h1>
               </div>
            </div>
        </div>
        {/* Database */}
        <div className="w-[350px] h-[300px] border-2 border-red-600">
            <h1 className="text-center font-bold text-[30px]">Database</h1>
            <hr className="border-2 w-[300px] mx-auto" />
            <div className='mt-[20px] grid grid-cols-3 p-5 ml-[20px]'>
               <div>
               <img className='w-[60px] h-[60px]' src={mysql} alt="" />
               <h1>MySQL</h1>
               </div>
               <div>
               <img className='w-[60px] h-[60px]' src={mongoDB} alt="" />
               <h1>MongoDB</h1>
               </div>
            </div>
        </div>
        {/* version control*/}
        <div className="w-[350px] h-[300px] border-2 border-red-600">
            <h1 className="text-center font-bold text-[30px]">Version Control</h1>
            <hr className="border-2 w-[300px] mx-auto" />
            <div className='mt-[20px] grid grid-cols-3 p-5 ml-[20px]'>
               <div>
               <img className='w-[60px] h-[60px]' src={git} alt="" />
               <h1>GIT</h1>
               </div>
            </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
