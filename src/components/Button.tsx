import * as React from 'react'

export function Button({ text, onClick }: { text: string, onClick: () => void }) {
    return (
        <button type="button" onClick={onClick}>
            {text}
        </button>
    )
}