import SectionHeader from '../SectionHeader/SectionHeader';
import photo from "/nurealammiaji.jpg";
import ContactForm from '../ContactForm/ContactForm';

const Contact = () => {
    return (
        <div id="contact">
            <SectionHeader header={"Keep in Touch"} message={"Contact Me"} />
            <br />
            {/* <div className="items-center justify-center gap-10 md:flex">
                <div className="md:p-10 md:w-1/2">
                    <figure className="">
                        <img className="w-full h-full" src={photo} />
                    </figure>
                </div>
            </div> */}
                <div className="p-10 mx-auto shadow shadow-secondary md:w-1/2 rounded-xl bg-neutral">
                    <div className="mb-10">
                        <div className="w-5/6 mx-auto text-2xl font-semibold text-transparent divider bg-gradient-to-r from-pink-500 to-yellow-500 bg-clip-text">Send Message</div>
                    </div>
                    <ContactForm />
                </div>
                <br /><br />
        </div>
    );
};

export default Contact;