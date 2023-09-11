import Image from "next/image";

export default function ProjectItem(data: any) {
    const title = data.data.properties.projectName.title[0]?.plain_text;
    const description = data.data.properties.description.rich_text[0]?.plain_text;
    const description2 = data.data.properties.description2?.rich_text[0]?.plain_text;
    const github = data.data.properties.GitHub.rich_text[0]?.href;
    const tag = data.data.properties.tag.multi_select;
    const date = data.data.properties.date.date
    const url = data.data.properties.URL.url;
    const img = data.data.cover?.file.url;
    console.log(date.start);
    return (
        <div className="project-card">

            <Image
                className="rounded-t-xl"
                src={img}
                width={100}
                height={60}
                layout="responsive"
                objectFit="cover"
                alt="이미지가 없습니다."
            />
            <div className="p-4">
                <div className="text-2xl font-bold">{title}</div>
                <div className="text-slate-400">{date.start} ~ {date.end !== null ? date.end : "진행중"}</div>
                <div className="flex flex-wrap items-start mt-2 gap-1 md:text-xs">
                    {tag.map((tag: any) => (
                        <div className="px-2 py-1 mr-2 rounded-md bg-sky-200 dark:bg-sky-700 w-30" key={tag}>{tag.name}</div>
                    ))}
                </div>

                <div className="mt-4 md:text-sm">{description}</div>
                <div>{description2}</div>
                <div><a href={github}>GitHub 바로가기</a></div>
                <div><a href={url}>배포 사이트 바로가기</a></div>
            </div>
        </div>
    )
}