import Contact from './contact.jsx'
import './Projects.css'
function Projects(){
    return(
        <>
        <span className='projecttitle'>THE DEV DIARY</span>
                <section id='projectsContainer'>
            {/* project 1 */}
            <section className='project'>
                <section className='ProjectImagecontainer'>
                    <img src='/BUYZONE.jpg' alt='' className='projectImage'/>
                </section>
                <section className='details'>
                    <span className='projectTitle'>BUYZONE</span>
                    <a href="https://pavanummagani1.github.io/BUYZONE-PROJECT/login/index.html"><button>VIEW PROJECT</button></a>
                </section>
            </section>
            {/* project-2 */}
            <section className='project'>
                <section className='ProjectImagecontainer'>
                    <img src='/wanderwise.png' alt='' className='projectImage'/>
                </section>
                <section className='details'>
                    <span className='projectTitle'>WANDERWISE</span>
                    <a href="https://wanderwise-rust.vercel.app/"><button>VIEW PROJECT</button></a>
                </section>
            </section>
            {/* Project 3 */}
            <section className='project'>
                <section className='ProjectImagecontainer'>
                    <img src='talksphere.png' alt='' className='projectImage'/>
                </section>
                <section className='details'>
                    <span className='projectTitle'>TALKSPHERE</span>
                    <a href="https://taskspherespeech.vercel.app/"><button>VIEW PROJECT</button></a>
                </section>
            </section>
            {/* project-4 */}
            <section className='project'>
                <section className='ProjectImagecontainer'>
                    <img src='/BUYZONE.jpg' alt='' className='projectImage'/>
                </section>
                <section className='details'>
                    <span className='projectTitle'>BUYZONE</span>
                    <a href="https://pavanummagani1.github.io/BUYZONE-PROJECT/login/index.html"><button>VIEW PROJECT</button></a>
                </section>
            </section>
        </section>
        <Contact/>
        </>
    )
}
export default Projects