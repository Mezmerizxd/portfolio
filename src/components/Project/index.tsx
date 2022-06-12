import './styles.scss';

interface ProjectProps {
    title: string;
    content: string;
    respository?: string;
    isPrivate?: boolean;
    website?: string;
}

const Project = ({
    title,
    content,
    respository,
    isPrivate,
    website,
}: ProjectProps) => {
    return (
        <div className="Project">
            <h1>{title}</h1>
            <p className="Content">{content}</p>
            <div className="Repository">
                {respository && (
                    <button
                        onClick={() => {
                            window.open(respository, '_blank');
                        }}
                    >
                        View Repository
                        {isPrivate && <span> &#91;Private&#93;</span>}
                    </button>
                )}
                {website && (
                    <button
                        onClick={() => {
                            window.open(website, '_blank');
                        }}
                    >
                        Website
                    </button>
                )}
            </div>
        </div>
    );
};

export default Project;
