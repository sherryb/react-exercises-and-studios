export default function HobbyLinks() {
    let hobbies = ["https://github.com/sherryb","https://en.wikipedia.org/wiki/Cat"]

    return (
        <div>
            <a href = {hobbies[0]}> Programming </a>
            <a href = {hobbies[1]}> Cats </a>
        </div>
    )
}