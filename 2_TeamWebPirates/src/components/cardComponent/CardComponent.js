import IMAGES from "../../../utilities/image-exporter"
const CardComponent = ({image, name, designation, organization, address, linkedin, github}) => {
    return (
      <section className="card">
        <img src={image} alt="Default Image"></img>
        <article>
          <h3>{name}</h3>
          <p>{designation}</p>
          <p>{organization}</p>
          <p>{address}</p>
          <p>
            <a href={linkedin}>
               <img src={IMAGES.linkedin} height="32px"></img>
            </a>
            <a href={github}>
               <img src={IMAGES.github} height="32px"></img>
            </a>
          </p>
        </article>
      </section>
    )
}

export default CardComponent;