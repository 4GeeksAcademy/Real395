import { AboutIntro } from "../components/AboutIntro"
import { AboutPurpose } from "../components/AboutPurpose";
import "../css/About.css";

export const About = () => {

    return (
        <main className="about-page">
            <AboutIntro />
            <AboutPurpose />
        </main>
    )
}