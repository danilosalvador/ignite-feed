import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'
import { Post, PostType } from './components/Post'

import styles from './App.module.css'
import './global.css'

const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/danilosalvador.png',
      name: 'Danilo Salvador',
      role: 'Full-Stack Software Engineer',
    },
    content: [
      { type: 'paragraph', content: 'Fala galera 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifólio. É um projeto que fiz no MBA da Rocketseat. O nome do projeto é Ignite Feed 🚀' },
      { type: 'link', content: '#novoprojeto #mba #rocketseat' },
    ],
    publishAt: new Date('2024-08-15 08:44:18'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/danilosalvador.png',
      name: 'Danilo Salvador',
      role: 'Full-Stack Software Engineer',
    },
    content: [
      { type: 'paragraph', content: 'Lorem ipsum' },
      { type: 'paragraph', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque sint accusamus repellat modi ad vitae illo fugit, deleniti similique odio laudantium eum amet reiciendis ea nostrum quibusdam doloremque delectus. Recusandae!' },
    ],
    publishAt: new Date('2024-08-18 20:18:04'),
  },
]

function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar/>
        <main>
          {
            posts.map((post) =>  (
              <Post
                key={post.id}
                post={post}
              />
            ))
          }
        </main>
      </div>
    </div>
  )
}

export default App
