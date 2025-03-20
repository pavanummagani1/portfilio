import './contact.css'
function Contact(){
    return(
        <>
        <section id='contactme'>
        <form>
            <span className='formtitle'>Let's Work Together</span>
            <input type="text" placeholder='FIRST NAME' />
            <input type="text" placeholder='LAST NAME' />
            <input type="email" placeholder='EMAIL' />
            <textarea id="review" name="review" rows="6" cols="50"></textarea>
            <input type="submit" value="SUBMIT" />
        </form>
        <div className='contactImage'>
            <img src="/Cf.jpg" alt="contactImage" className='contactImg' />
        </div>
        </section>
        </>
    )
}
export default Contact