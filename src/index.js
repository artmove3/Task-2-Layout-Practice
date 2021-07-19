import Post from "./Post"
import './styles/styles.css'
import './styles/scss.scss'

const post = new Post('Hello message: ')

console.log('Post to String:', post.toString())
console.log('Hello Again!')