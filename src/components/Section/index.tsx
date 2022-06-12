import './styles.scss';

interface SectionProps {
    title: string;
    content: string;
}

const Section = ({ title, content }: SectionProps) => {
    return (
        <div className="Section">
            <h1 className="Title">{title}</h1>
            <p className="Content">{content}</p>
        </div>
    );
};

export default Section;
