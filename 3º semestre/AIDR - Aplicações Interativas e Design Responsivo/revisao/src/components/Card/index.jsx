import "./card.css";
export default function Card({ title, description, image }) {
    return (
        <div className="card">
            <img className="card-image" src={image} alt="Placeholder" />
            <h2 className="card-title">{ title }</h2>
            <p className="card-description">{ description }</p>
        </div>
    )
    
}