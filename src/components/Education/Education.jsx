import SectionHeader from '../SectionHeader/SectionHeader';
import Tilt from 'react-parallax-tilt';

const Education = () => {
    return (
        <div id="education">
            <SectionHeader header={"Background"} message={"My Education"} />
            <br />
            <div className="items-center justify-center [&>*]:my-5 md:[&>*]:my-0 md:flex gap-5">
                <Tilt>
                    <div className="p-4 text-left shadow shadow-secondary rounded-xl bg-neutral">
                        {/* <PiAppStoreLogoBold className="text-5xl" /> */}
                        <h4 className="mt-6 text-2xl font-semibold text-transparent bg-gradient-to-r from-pink-500 to-yellow-500 bg-clip-text">B.Sc (Hon's) in IT</h4>
                        <p className="mt-5 font-semibold text-slate-300/90">2024, CGPA: 3.45 / 4</p>
                        <p className="mt-4 text-xl font-medium">Azteca University (Universidad Azteca)</p>
                        <p className="mt-3 text-slate-400">San Antonio, Chalco, Mexico</p>
                    </div>
                </Tilt>
                <Tilt>
                    <div className="p-4 text-left shadow shadow-secondary rounded-xl bg-neutral md:min-w-[300px]">
                        {/* <PiEdu className="text-5xl" /> */}
                        <h4 className="mt-6 text-2xl font-semibold text-transparent bg-gradient-to-r from-pink-500 to-yellow-500 bg-clip-text">Diploma in Engineering</h4>
                        <p className="mt-5 font-semibold text-slate-300/90">2019, CGPA: 3.13 / 4</p>
                        <p className="mt-4 text-xl font-medium">Chattogram Polytechnic Institute</p>
                        <p className="mt-3 text-slate-400">Nasirabad, Chattogram, Bangladesh</p>
                    </div>
                </Tilt>
                <Tilt>
                    <div className="p-4 text-left shadow shadow-secondary rounded-xl bg-neutral">
                        {/* <PiAppStoreLogoBold className="text-5xl" /> */}
                        <h4 className="mt-6 text-2xl font-semibold text-transparent bg-gradient-to-r from-pink-500 to-yellow-500 bg-clip-text">Dakhil / SSC</h4>
                        <p className="mt-5 font-semibold text-slate-300/90">2014, GPA: 5.00 / 5</p>
                        <p className="mt-4 text-xl font-medium">Bharella Shah Israil Kamil Madrasah</p>
                        <p className="mt-3 text-slate-400">Bharella, Cumilla, Bangladesh</p>
                    </div>
                </Tilt>
            </div>
        </div>
    );
};

export default Education;