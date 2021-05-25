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
            <input type="submit" value="Toggle Rules" onClick={onClick}/>
            {showDisplay ? <Rules /> : null}
        </div>
    )

}

export default RuleDisplay;