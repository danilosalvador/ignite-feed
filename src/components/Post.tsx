import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react'

import { format, formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'

import { Avatar } from './Avatar'
import { Comment } from './Comment'

import styles from './Post.module.css'

export interface PostType {
    id: number
    author: {
        name: string
        role: string
        avatarUrl: string
    }
    publishAt: Date
    content: {
        type: 'paragraph' | 'link'
        content: string
    }[]
}

interface PostProps {
    post: PostType
}

export function Post({ post }: PostProps) {
    const [ comments, setComments ] = useState([
        'Post supimpa!'
    ])
    const [ newCommentText, setNewCommentText ] = useState('')

    const { author, content, publishAt } = post
    const publishedDateFormatted = format(publishAt, "dd 'de' LLLL 'às' HH:mm'h'", {
        locale: ptBR,
    })
    const publishDateRelativeToNow = formatDistanceToNow(publishAt, {
        locale: ptBR,
        addSuffix: true,
    })

    function handleCreateNewComment(event: FormEvent) {
        event.preventDefault()

        setComments([
            ...comments,
            newCommentText,
        ])
        setNewCommentText('')
    }

    function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>) {
        event.target.setCustomValidity('')

        setNewCommentText(event.target.value)
    }

    function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
        event.target.setCustomValidity('Esse campo é obrigatório')
    }

    function handleDeleteComment(comment: string) {
        const newComments = comments.filter(item => item !== comment)

        setComments(newComments)
    }

    const isNewCommentEmpty = newCommentText.length === 0

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src={author.avatarUrl}/>
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>

                <time title={publishedDateFormatted} dateTime={publishAt.toISOString()}>
                    {publishDateRelativeToNow}
                </time>
            </header>

            <div className={styles.content}>
                {content.map((line, index) => {
                    if (line.type === 'paragraph') {
                        return (
                            <p key={index}>
                                {line.content}
                            </p>
                        )
                    }
                    if (line.type === 'link') {
                        return (
                            <p key={index}>
                                <a href="#">
                                    {line.content}
                                </a>
                            </p>
                        )
                    }
                })}
            </div>

            <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>
                <textarea
                    placeholder='Deixe um comentário'
                    value={newCommentText}
                    onChange={handleNewCommentChange}
                    onInvalid={handleNewCommentInvalid}
                    required
                />
                <footer>
                    <button type='submit' disabled={isNewCommentEmpty}>
                        Publicar
                    </button>
                </footer>
            </form>

            <div className={styles.commentList}>
                {comments.map((comment, index) => (
                    <Comment
                        key={index}
                        content={comment}
                        onDeleteComment={handleDeleteComment}
                    />
                ))}
            </div>
        </article>
    )
}