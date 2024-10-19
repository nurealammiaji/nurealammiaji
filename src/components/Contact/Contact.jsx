import SectionHeader from '../SectionHeader/SectionHeader';

const Contact = () => {
    return (
        <div id="contact">
            <SectionHeader header={"Keep in Touch"} message={"Contact Me"} />
            <br />
            <div className="p-10 mx-auto shadow shadow-secondary md:w-3/4 rounded-xl bg-neutral">
                <div className="mb-20">
                    <div className="w-3/6 mx-auto text-2xl font-semibold text-transparent divider bg-gradient-to-r from-pink-500 to-yellow-500 bg-clip-text">Social Links</div>
                </div>
                <div className="flex gap-10 flex-wrap justify-center items-center">
                    <a href="https://www.linkedin.com/in/nurealammiaji" target="_blank">
                        <img src="https://raw.githubusercontent.com/maurodesouza/profile-readme-generator/master/src/assets/icons/social/linkedin/default.svg" width="52" height="40" alt="linkedin logo" />
                    </a>
                    <a href="https://www.facebook.com/nurealammiaji" target="_blank">
                        <img src="https://raw.githubusercontent.com/maurodesouza/profile-readme-generator/master/src/assets/icons/social/facebook/default.svg" width="52" height="40" alt="facebook logo" />
                    </a>
                    <a href="https://twitter.com/nurealammiaji" target="_blank">
                        <img src="https://raw.githubusercontent.com/maurodesouza/profile-readme-generator/master/src/assets/icons/social/twitter/default.svg" width="52" height="40" alt="twitter logo" />
                    </a>
                    <a href="https://www.youtube.com/@nurealammiaji" target="_blank">
                        <img src="https://raw.githubusercontent.com/maurodesouza/profile-readme-generator/master/src/assets/icons/social/youtube/default.svg" width="52" height="40" alt="youtube logo" />
                    </a>
                    <a href="https://t.me/nurealammiaji" target="_blank">
                        <img src="https://raw.githubusercontent.com/maurodesouza/profile-readme-generator/master/src/assets/icons/social/telegram/default.svg" width="52" height="40" alt="telegram logo" />
                    </a>
                    <a href="https://www.instagram.com/nurealammiaji" target="_blank">
                        <img src="https://raw.githubusercontent.com/maurodesouza/profile-readme-generator/master/src/assets/icons/social/instagram/default.svg" width="52" height="40" alt="instagram logo" />
                    </a>
                    <a href="mailto:nurealam.miaji@gmail.com">
                        <img src="https://raw.githubusercontent.com/maurodesouza/profile-readme-generator/master/src/assets/icons/social/gmail/default.svg" width="52" height="40" alt="gmail logo" />
                    </a>
                </div>
            </div>
            <br /><br />
        </div>
    );
};

export default Contact;