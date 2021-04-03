import Header from "../components/Header";
import Navigation from "../components/Navigation";
import About_cm from "../components/About_cm";
import Main_Text from "../components/Main_Text";
import Body from "../components/Body";

const About = () => {
    return ( 
        <div>
            <Header/>
            <Navigation/>
            <Main_Text/>
            <About_cm/>
            <Body/>
        </div>
     );
}
 
export default About;