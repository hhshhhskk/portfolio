export default function ProjectsLayout(props: any) {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen px-5 py-5 mb-10">
            {props.children}
        </div>
    )
}
