import { loremIpsum } from 'lorem-ipsum'

export default function Article ({ title, img, alt, date}) {
    return(
        <main>
            <article>
                <time>{date}</time>
                <h2 className="blog-title">{title}</h2>
                <img src={img} alt={alt} />
                <p>{loremIpsum({count: 12})}</p>
                <aside><a href='/#'>Continues ...</a></aside>
            </article>
    </main>
    )
}