import SectionHeader from '../SectionHeader/SectionHeader';
import Tilt from 'react-parallax-tilt';

const Contact = () => {
    return (
        <div id="contact">
            <SectionHeader header={"Keep in Touch"} message={"Connect Me"} />
            <br />
            <div className="p-10 mx-auto shadow shadow-violet-300 md:w-3/4 rounded-xl bg-neutral glass">
                <div className="mb-20">
                    <div className="mx-auto text-2xl font-semibold text-transparent sm:w-3/6 divider bg-gradient-to-r from-pink-500 to-yellow-500 bg-clip-text">Social Links</div>
                </div>
                <div className="flex flex-wrap items-center justify-center gap-10">
                    <Tilt>
                        <a href="https://www.linkedin.com/in/nurealammiaji" target="_blank">
                            <img src="https://raw.githubusercontent.com/maurodesouza/profile-readme-generator/master/src/assets/icons/social/linkedin/default.svg" width="52" height="40" alt="linkedin logo" />
                        </a>
                    </Tilt>
                    <Tilt>
                        <a href="https://www.facebook.com/nurealammiaji" target="_blank">
                            <img src="https://raw.githubusercontent.com/maurodesouza/profile-readme-generator/master/src/assets/icons/social/facebook/default.svg" width="52" height="40" alt="facebook logo" />
                        </a>
                    </Tilt>
                    <Tilt>
                        <a href="https://twitter.com/nurealammiaji" target="_blank">
                            <img src="https://raw.githubusercontent.com/maurodesouza/profile-readme-generator/master/src/assets/icons/social/twitter/default.svg" width="52" height="40" alt="twitter logo" />
                        </a>
                    </Tilt>
                    <Tilt>
                        <a href="mailto:nurealam.miaji@gmail.com">
                            <img src="https://raw.githubusercontent.com/maurodesouza/profile-readme-generator/master/src/assets/icons/social/gmail/default.svg" width="52" height="40" alt="gmail logo" />
                        </a>
                    </Tilt>
                    <Tilt>
                        <a href="https://t.me/nurealammiaji" target="_blank">
                            <img src="https://raw.githubusercontent.com/maurodesouza/profile-readme-generator/master/src/assets/icons/social/telegram/default.svg" width="52" height="40" alt="telegram logo" />
                        </a>
                    </Tilt>
                    <Tilt>
                        <a href="https://github.com/nurealammiaji" target="_blank">
                            <img className="bg-white rounded-full" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" width="52" height="40" alt="github logo" />
                        </a>
                    </Tilt>
                </div>
            </div>
            <br /><br />
        </div>
    );
};

export default Contact;