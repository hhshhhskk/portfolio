import { TOKEN, DATABASE_ID } from "../../../config/index"

async function getData() {
    const options = {
        method: 'POST',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${TOKEN}`,
            'Notion-Version': '2022-06-28',
            'content-type': 'application/json'
        },
        body: JSON.stringify({ page_size: 100 })
    };

    const res = await fetch(`https://api.notion.com/v1/databases/${DATABASE_ID}/query`, options);

    const data = await res.json();

    // console.log(data.results);

    const projectNames = data.results.map((projects: any) => {
        const res = projects.properties
        return res;
    })

    return projectNames
}

export default async function Projects() {
    const data = await getData()
    console.log(data);
    return <main></main>
}