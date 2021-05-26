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
        <div className="rulesbutton">
            <button className="nes-btn is-warning" type="submit" value="Rules" onClick={onClick}>Rules</button>
            {showDisplay ? <Rules /> : null}
        </div>
    )

}

export default RuleDisplay;