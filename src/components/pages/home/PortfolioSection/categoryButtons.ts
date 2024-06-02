import { JavascriptIcon, NextIcon, ReactIcon,TestIcon} from "@src/icons";

export const categoryButtons = [
    {
        id: "nextjs",
        title: "Next JS",
        icon: NextIcon
    },{
        id: "reactjs",
        title: "React JS",
        icon: ReactIcon
    },
    {
        id: "javascript",
        title: "Javascript",
        icon: JavascriptIcon
    },{
        id: "AutomationTesting",
        title: "Automation-Testing",
        icon: TestIcon
    }
] as const;
