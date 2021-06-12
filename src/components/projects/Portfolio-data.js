import L_Cuizine from "../../assets/img/projects/cuizine.png";
import L_Quiz from "../../assets/img/projects/quiz.png";
import L_Pokedex from "../../assets/img/projects/pokedex.png";
import L_MERNLogin from "../../assets/img/projects/Mern-profile-project.png";


export const timelineElements = {
    projects: [
        {
            id: 7,
            title: "MERN Login, Signup & profile",
            technologiesUsed: [
                "Node JS",
                "Express",
                "Javascript (React JS)",
                "MongoDB",
                "Bootstrap",
                "CSS", 
                "HTML"
                ],
            description: "Site created as learning purpose, with used of MERN Technology, To store the Database, it used the MongoDB Atlas to store data online, For the Backend it Node JS with Express & Frontend, it Used Javascript framework React-JS with the help of Bootstrap. It is completed Fullstack project with responsive and Dynamic web page.",
            buttontext: "View the MERN fullstack Projects",
            date: "June 2021",
            icon: "work",
            image: L_MERNLogin,
            view:   "https://mernloginprofile.herokuapp.com/signup",
        },
        
        {
            id: 8,
            title: "Quiz App",
            technologiesUsed: [
                "HTML",
                 "CSS", 
                "Bootstrap",
                "React Js"
                ],
            description: "Site created as learning purpose, with used of React Hooks.",
            buttontext: "View the frontend Projects",
            date: "May 2021",
            icon: "work",
            image: L_Quiz,
            view:   "https://quiz-app-reactjs.herokuapp.com/",
        },
        {
            id: 9,
            title: "Pokedex",
            technologiesUsed: [
                "HTML",
                 "CSS", 
                "Bootstrap",
                "React Js"
                ],
            // technologiesUsed: "React JS, Bootstrap",
            description: "Site created as part of Konexio's Digitous training, Allows you to create a first responsive and dynamic web site by using the API and Hooks.",
            buttontext: "View the frontend Projects",
            date: "Jan 2020",
            icon: "school",
            image: L_Pokedex,
            view:   "https://pokedex-yeshi.netlify.app/",
        },
        {
            id: 10,
            title: "Cui'zine",
            technologiesUsed: [
                "HTML",
                 "CSS", 
                "Bootstrap"
                ],
            description: "Site created as part of Konexio's Digitous training, Allows you to create a first responsive web site.",
            buttontext: "View the frontend Projects",
            date: "Dec 2020",
            icon: "school",
            image: L_Cuizine,
            view:   "https://gangchen-yeshi-project-cuizine.netlify.app/",
        },
    ]

}