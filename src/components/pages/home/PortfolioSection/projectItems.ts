export type Category = "nextjs" | "reactjs" | "javascript" | "AutomationTesting";

export type ProjectItem = {
    id: string;
    title: string;
    description: string;
    websiteLink?: string;
    videoLink?: string; 
    sourceLink: string;
    techStacks: string[];
};

export const projectItems = {
    nextjs: [
        {
            id: "Wander-Internal-Tool",
            title: "Wander-Internal-Tool",
            description:
                "This full-stack project utilizes ##Next.js##, ##React##, and ##TypeScript## for the frontend and interacts with ##AWS S3## for data storage. It implements ##RESTful APIs## to retrieve CSV data from S3, store user responses, and allow users to download their results from S3. The core functionality includes testing user preferences for responses from different AI models (ChatGPT, ChatGPT-4, Gemini) to ensure alignment with human feedback. The goal is to optimize machine learning models for better self-learning efficiency based on user feedback.",
            websiteLink: "https://actearn-pairwise-evaluator-tool.vercel.app/",
            videoLink: "/video/wander-internal-tool.mp4",
            sourceLink: "https://github.com/ChungNYCU/actearn-pairwise-evaluator-tool.git",
            techStacks: ["NextJS", "ReactJs", "JavaScript", "TypeScript", "TailwindCSS", "Rest APIs", "Aws S3","Vercel","Postman"]
        }
    ],
    reactjs: [
        {
            id: "book-my-homestay",
            title: "BookMyHomestay",
            description:
            'Developed a full-stack application to assist Vancouver students in finding ideal homestays, using React for the frontend and ##PHP## with MySQL for the backend. Implemented REST API CRUD operations to ensure efficient data management. Collaborated in a team of three within an Agile framework, contributing to frontend design, backend development, and daily stand-ups to ensure smooth project progress.',
            videoLink: "/video/demo.mp4", 
            websiteLink: "https://drive.google.com/file/d/12vI5yd2h7BvPcXpG6vww-MFUsX92_G_O/view?usp=drive_link",
            sourceLink: "https://github.com/Poyuchao/BookMyHomestay",
            techStacks: ["ReactJS", "MySQL", "PHP", "JavaScript","Rest APIs","Postman"]
        },
        {
            id: "crypto-marketcap",
            title: "CryptoCurrency MarketCap",
            description:
                "I have completed this cryptocurrency marketcap website. It has landing page, and a header to show some crypto statistics. It also has coins tab and user can see Top 100 coins with images and some other values. I have used Cryptomarketcap API for this project. Finally, there were some errors about CORS policy and I used netlify-cli tool for that as well.",
            websiteLink: "https://serdargokhan-crypto-marketcap.netlify.app",
            sourceLink:
                "https://github.com/serdargokhan/react-projects/tree/main/4-cryptocurrency-marketcap",
            techStacks: ["ReactJS", "TailwindCSS", "Netlify", "JavaScript"]
        },
      
    
       
    ],
    AutomationTesting: [
        
     
    ],
    javascript: [
        {
            id: "Yoga-Website",
            title: "Yoga-Website",
            description:
                "The yoga website showcases fundamental web development skills, using HTML for structure, CSS for styling, and JavaScript for interactivity. Designed to perform seamlessly on desktops, tablets, and smartphones, the site provides comprehensive information about yoga classes and highlights the benefits of yoga for the body and mind. By utilizing responsive design techniques, it ensures wide compatibility and an enhanced user experience.",
            websiteLink: "https://poyuchao.github.io/yoga-studio-website/",
            videoLink: "/video/yoga.mp4", 
            sourceLink:
                "https://github.com/Poyuchao/yoga-studio-website.git",
            techStacks: ["JavaScript", "CSS", "HTML"]
        },
        {
            id: "Pet-eCommerce",
            title: "Pet-eCommerce",
            description:
                "This pet eCommerce website is a practice project to hone fundamental skills in ##html## ##CSS## and ##JavaScript##. In this project, I contributed by designing the shopping cart and implementing the shopping cart logic using JavaScript.",
            websiteLink: "https://isaacnetoo.github.io/ProjectWebDev3/",
            videoLink: "/video/pet-e.mp4", 
            sourceLink:
                "https://github.com/isaacnetoo/ProjectWebDev3.git",
            techStacks: ["JavaScript", "CSS", "HTML"]
        }
    ]
} satisfies Record<Category, ProjectItem[]>;
