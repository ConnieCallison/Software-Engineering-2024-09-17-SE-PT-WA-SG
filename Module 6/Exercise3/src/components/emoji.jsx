import (useState) from 'react'

function emojiMood () {
    const [mood, setMood] = useState("happy");
    return (
        <div className="ChangeEmojiMood"> 
            Current Mood: {mood}
        </div>
        )
}

<button
onClick={() => setMood("sad")}>
Sad Emoji
</button>

// link to happy emoji image: https://em-content.zobj.net/source/apple/33/smiling-face-with-smiling-eyes_1f60a.png

// link to sad emoji image: https://em-content.zobj.net/source/apple/118/crying-face_1f622.png

export default emojiMood;