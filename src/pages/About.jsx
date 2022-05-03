import { useParams } from 'react-router-dom'
function About() {
    const { id } = useParams()

    return (
        <h1>It is About Page and about {id}</h1>
    )
}

export default About