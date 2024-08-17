import { PencilSimpleLine } from '@phosphor-icons/react'
import { Avatar } from './Avatar'

import styles from './Sidebar.module.css'

export function Sidebar() {

    return (
        <aside className={styles.sidebar}>
            <img 
                className={styles.cover} 
                src="https://images.pexels.com/photos/1089438/pexels-photo-1089438.jpeg?auto=compress&cs=tinysrgb&w=256" />
            
            <div className={styles.profile}>
                <Avatar src="https://github.com/danilosalvador.png" />
                <strong>Danilo Salvador</strong>
                <span>Full-Stack Software Engineer</span>
            </div>

            <footer>
                <a href="#">
                    <PencilSimpleLine size={20} />
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    )
}