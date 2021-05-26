import React, {useState} from 'react';
import Rules from './Rules'

const RuleDisplay = () => {

    const [showDisplay, setShowDisplay] = useState(false)
    
    const onClick = () => {
        setShowDisplay(true)
        if (showDisplay === true) {
            setShowDisplay(false)
        }
    }
    return (
        <div>
            <input className="nes-btn is-success" type="submit" value="Rules" onClick={onClick}/>
            {showDisplay ? <Rules /> : null}
        </div>
    )

}

export default RuleDisplay;