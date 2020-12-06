import React, {useRef} from 'react'
import { BullNCow, ShowPhoto, SmartPlug, ChatApp, Overall } from './components'

const Project2 = () => {
    const refSmartPlug = useRef(null);
    const refChatApp = useRef(null);
    const refBullNCow = useRef(null);
    const refShowPhoto = useRef(null);

    const schollToRef = (ref) => {
        ref.current.scrollIntoView({
            behavior: "smooth",
            block: "nearest",
            inline: "start"
          }) 
    }

    return (
        <div id="project">
            <Overall 
                schollToRef={schollToRef} 
                refSmartPlug={refSmartPlug}
                refChatApp={refChatApp}
                refBullNCow={refBullNCow}
                refShowPhoto={refShowPhoto}
            />
            <BullNCow refApp={refBullNCow} />
            <SmartPlug refApp={refSmartPlug} />
            <ShowPhoto refApp={refShowPhoto} />
            <ChatApp refApp={refChatApp} />
        </div>
    )
}

export default Project2
