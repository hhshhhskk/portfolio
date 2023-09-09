import Image from "next/image";

export default function ProjectItem(data: any) {
    const title = data.data.properties.projectName.title[0]?.plain_text;
    const description = data.data.properties.description.rich_text[0]?.plain_text;
    const github = data.data.properties.GitHub.rich_text[0]?.href;
    const url = data.data.properties.URL.url;
    const img = data.data.cover?.file.url;
    // console.log(img);
    return (
        <div className="flex flex-col m-3 bg-slate-700 rounded-md">

            <Image
                className="rounded-t-xl"
                src={img}
                width={100}
                height={60}
                layout="responsive"
                objectFit="none"
                alt="이미지가 없습니다."
            />
            <div className="p-4">
                <div className="text-2xl">{title}</div>
                <div>{description}</div>
                <div><a href={github}>GitHub 바로가기</a></div>
                <div><a href={url}>배포 사이트 바로가기</a></div>
            </div>
        </div>
    )
}