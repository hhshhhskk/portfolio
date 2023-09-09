import ProjectItem from "@/components/projects/projectItem";
import { TOKEN, DATABASE_ID } from "../../../config/index"

export async function getData() {
    const options = {
        method: 'POST',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${TOKEN}`,
            'Notion-Version': '2022-06-28',
            'content-type': 'application/json'
        },
        body: JSON.stringify({
            sorts: [
                {
                    "property": "date",
                    "direction": "ascending"
                },
            ],
            page_size: 100
        })
    };

    const res = await fetch(`https://api.notion.com/v1/databases/${DATABASE_ID}/query`, options);

    const data = await res.json();

    // console.log(data.results);

    const projectData = data.results.map((projects: any) => {
        const res = projects;
        return res;
    })

    return projectData
}

export default async function Projects() {
    const data = await getData()
    // console.log(data);
    return (
        <>
            <h1 className="text-4xl font-bold sm:text-6xl">
                총 프로젝트 :
                <span className="pl-4 text-blue-500">
                    {data.length}
                </span>
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 py-10 gap-7 sm:w-full">

                {data.map((projects: any) => (
                    <ProjectItem key={projects.id} data={projects} />
                ))}
            </div>
        </>
    )
}