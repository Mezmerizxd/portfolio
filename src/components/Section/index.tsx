import './styles.scss';

interface SectionProps {
    title: string;
    content: string;
    linkName?: string;
    link?: string;
}

const Section = ({ title, content, linkName, link }: SectionProps) => {
    return (
        <div className="Section">
            <h1 className="Title">{title}</h1>
            <p className="Content">{content}</p>
            {link && (
                <div className="Button-container">
                    <button
                        onClick={() => {
                            window.open(link, '_blank');
                        }}
                    >
                        {linkName}
                    </button>
                </div>
            )}
        </div>
    );
};

export default Section;
