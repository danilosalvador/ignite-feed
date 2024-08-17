import { useState } from 'react'

import { HandsClapping, Trash } from '@phosphor-icons/react'

import { Avatar } from './Avatar'

import styles from './Comment.module.css'

interface CommentProps {
    content: string
    onDeleteComment: (comment: string) => void
}

export function Comment({ content, onDeleteComment }: CommentProps) {
    const [ likeCount, setLikeCount ] = useState(0)

    function handleDeleteComment() {
        onDeleteComment(content)
    }
    function handleLikeComment() {
        setLikeCount((previous) => {
            return previous + 1
        })
    }
    return (
        <div className={styles.comment}>
            <Avatar src="https://github.com/danilosalvador.png" hasBorder={false} />
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Danilo Salvador</strong>
                            <time title='15 de Agosto às 08:44h' dateTime='2024-08-15 08:44:18'>Cerca de 1h atrás</time>
                        </div>
                        <button onClick={handleDeleteComment} title="Excluir comentário">
                            <Trash size={24}/>
                        </button>
                    </header>
                    <p>{content}</p>
                </div>
                <footer>
                    <button onClick={handleLikeComment}>
                        <HandsClapping />
                        Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}