import SectionHeader from "../SectionHeader/SectionHeader";

const Skills = () => {

    const currentYear = new Date().getFullYear();
    const yearOfExperience = currentYear - 2022;

    return (
        <div id="skills">
            <SectionHeader header={`${yearOfExperience}+ Years Experience`} message={"My Skills"} />
            <br />
        </div>
    );
};

export default Skills;