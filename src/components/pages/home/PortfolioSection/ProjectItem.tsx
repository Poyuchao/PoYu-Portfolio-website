import { useState } from "react";
import { useTranslations } from "next-intl";
import { ExternalLinkIcon, GithubIcon} from "@src/icons";
import { NextLink } from "@src/components/common";
import Modal from "@src/components/common/Modal";
import type { ProjectItem as ProjectItemProps } from "./projectItems";
import VideoIcon from "@src/icons/VideoIcon";

const keywords = ["敏捷開發","HTML","CSS","JavaScript", "React", "PHP", "MySQL", "RESTful-APIs", "CRUD","Next.js","TypeScript","AwsS3","TailwindCSS","agile"];

function highlightText(text: string): React.ReactNode {
   
    const regex = new RegExp(`##(${keywords.join('|')})##`, 'gi');
    const parts = text.split(regex);


    return parts.map((part, index) => {
        if (keywords.some(keyword => keyword.toLowerCase() === part.toLowerCase())) {
            return (
                <span key={`highlight-${index}`} className="font-bold text-red-500">
                    {part}
                </span>
            );
        }
        return part;
    });
}

export default function ProjectItem({
    title,
    description,
    websiteLink,
    sourceLink,
    videoLink,
    techStacks
}: Omit<ProjectItemProps, "id">) {
    const t = useTranslations("Home.PortfolioSection.actions");
    const [isModalOpen, setModalOpen] = useState(false);

    const openModal = () => setModalOpen(true);
    const closeModal = () => setModalOpen(false);

    const handleWebsiteLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        if (!websiteLink ) {
            e.preventDefault();
            alert("Sorry, It looks like this link is currently unavailable.");
        }
    };

  

    return (
        <article className="flex cursor-default flex-col gap-6 bg-white p-6 transition duration-300 hover:-translate-y-4 hover:translate-x-4 hover:shadow-primary-100-lg">
            <h3 className="bg-primary-100 p-2 text-center font-semibold">
                {title}
            </h3>
            <p>{highlightText(description)}</p>
            <ul className="flex flex-wrap gap-2.5 text-primary-200">
                {techStacks.map((techStack, index) => (
                    <li
                        className="rounded-full border border-primary-200 px-3 py-1 text-sm"
                        key={index}
                    >
                        {techStack}
                    </li>
                ))}
            </ul>

            <div className="mt-auto flex justify-end gap-4">
               
                <button
                    onClick={openModal}
                    className="group flex w-1/2 items-center justify-around rounded-lg border-2 border-primary-300 px-4 py-2 hover:bg-primary-300 hover:text-white md:w-1/3"
                >
                    <span>{t("demo-display")}</span>
                    <VideoIcon className="h-8 w-8 fill-primary-300 transition group-hover:fill-white" />
                </button>

                <NextLink
                    href={websiteLink}
                    onClick={handleWebsiteLinkClick}
                    className="group flex w-1/2 items-center justify-around rounded-lg border-2 border-primary-300 px-4 py-2 hover:bg-primary-300 hover:text-white md:w-1/3"
                >
                    <span>{t("view-website")}</span>
                    <ExternalLinkIcon className="h-8 w-8 fill-primary-300 transition group-hover:fill-white" />
                </NextLink>

                <NextLink
                    href={sourceLink}
                    className="group flex w-1/2 items-center justify-around rounded-lg border-2 border-primary-300 px-4 py-2 hover:bg-primary-300 hover:text-white md:w-1/3"
                >
                    <span>{t("source-code")}</span>
                    <GithubIcon className="h-8 w-8 fill-primary-300 transition group-hover:fill-white" />
                </NextLink>
            </div>

            {videoLink && (
                <Modal isOpen={isModalOpen} onClose={closeModal}>
                    <div className="video-container w-full h-full">
                        <video controls autoPlay className="video-player w-full h-full">
                            <source src={videoLink} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </Modal>
            )}
        </article>
    );
}
