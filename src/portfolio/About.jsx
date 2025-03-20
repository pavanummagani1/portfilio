import './About.css'
import Projects from './Projects.jsx'
function Aboutme() {
    return (
        <>
        <section className='aboutme'>
        <section className='detailsContainer' id='detailsContainer'>
                <span className='Abouttitle'>ABOUT ME</span>
                <span className='details'>Hi there! I'm Pavan, a passionate Frontend & Backend Developer with expertise in HTML, CSS, JavaScript, React, Next.js, Node.js, and MySQL. I love transforming ideas into reality with clean, efficient, and scalable code. With a strong foundation in both frontend and backend technologies, I specialize in building user-friendly, responsive web applications that deliver seamless experiences.
                    My journey into development has been driven by curiosity and a constant desire to improve. I believe in MS Dhoni's philosophy-"Process is more important than the result", and I apply this mindset in my work by focusing on writing optimized code, solving complex challenges, and continuously learning new technologies. My expertise includes frontend development, where I craft intuitive user interfaces, and backend development, where I ensure robust and scalable server-side solutions.
                    I work with a variety of tools and technologies, including React.js, Next.js, Node.js, Express.js, and MySQL, along with platforms like Git, Postman, AWS, and VS Code. My goal is to contribute to meaningful projects that make a difference while continuously growing as a developer.
                    If you’d like to connect, feel free to reach out! I'd love to collaborate on exciting projects or discuss new ideas. You can contact me via <a href="mailto:pavanummagani1@gmail.com">email</a>, <a href="https://www.linkedin.com/in/pavan-kalyan07/">LinkedIn</a>, or <a href="https://github.com/pavanummagani1">GitHub</a>. 🚀
                    </span>
            </section>
            <section className='imageContainer'>
                <img src="/IMG1.jpg" alt="pavan" className='portfolioImage' />
            </section>
        </section>
            <Projects/>
        </>
    )
}
export default Aboutme
