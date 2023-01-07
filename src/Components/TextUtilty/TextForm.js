import { useState } from 'react';
import Btn from '../Button/Btn';
import './TextForm.css';

const TextForm = (props) => {
    const [text, setText] = useState("");
    const handleText = (event) => {
        setText(event.target.value);
    }
    const hendleUpCase = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase", "success")
    }
    const hendleLoCase = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase", "success")

    }
    const hendleClearText = () => {
        setText("");
        props.showAlert("Text cleared", "success")

    }
    const hendleCopyText = () => {
        let box = document.getElementById("myBox");
        box.select();
        navigator.clipboard.writeText(text);
        props.showAlert("Copied to clipboard", "success")

        setTimeout(() => {
            document.getSelection().removeAllRanges();
        }, 500);
    }

    const hendleSpeakText = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
        props.showAlert("Text speaking start", "success")

    }


    const hendleCapitalizeCase = () => {
        let TextSplit = text.split(" ");
        if(text === text.toUpperCase()) {
            TextSplit = TextSplit.map(e => e.toLowerCase());
        }
        let newText = TextSplit.map((ele) => ele.charAt(0).toUpperCase() + ele.slice(1)).join(" ");
        setText(newText);
        props.showAlert("Converted to Capitalize", "success")

    }
    const hendleRemoveSpaces = () => {
        let res = text.trim();
        let newText = res.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed", "success")
        
    }
    const hendleSaveText = () => {
        localStorage.setItem("Text", text)
        props.showAlert("Save Text", "success")

    }
    const hendleRestoreText = () => {
        let res = localStorage.getItem("Text");
        setText(res)
        props.showAlert("Restore Text", "success")

    }
    let count = text.split(/\s+/).filter((element) => element.length !==0);
    return (
        <div className='formconteiner'>
            <h1 className={`heading color-${props.mode}`}>{props.heading}</h1>
            <textarea value={text} onChange={handleText} id="myBox" cols="30" rows="10" className={`text-mode-${props.mode}`}></textarea>
            <Btn mode={props.mode} dis={text.length === 0? 'disable' : 'active'} click={hendleUpCase} title="Convert to UpperCase" />
            <Btn mode={props.mode} dis={text.length === 0? 'disable' : 'active'} click={hendleLoCase} title="Convert to LowerCase" />
            <Btn mode={props.mode} dis={text.length === 0? 'disable' : 'active'} click={hendleCapitalizeCase} title="Convert to Captilize" />
            <Btn mode={props.mode} dis={text.length === 0? 'disable' : 'active'} click={hendleClearText} title="Clear Text" />
            <Btn mode={props.mode}  dis={text.length === 0? 'disable' : 'active'} click={hendleCopyText} title="Copy Text" />
            <Btn mode={props.mode}  dis={text.length === 0? 'disable' : 'active'} click={hendleSpeakText} title="Speak Text" />
            <Btn mode={props.mode}  dis={text.length === 0? 'disable' : 'active'} click={hendleRemoveSpaces} title="Remove Extra Spaces" />
            <Btn mode={props.mode}  dis={text.length === 0? 'disable' : 'active'} click={hendleSaveText} title="Save" />
            <Btn mode={props.mode}  dis={localStorage.Text === undefined? 'disable' : 'active'} click={hendleRestoreText} title="Restore" />


            <div className={`color-${props.mode}`}>
                <h2 className='head'>Your text summary</h2>
                <p className='counting'><strong>{count.length}</strong> word and <strong>{text.length}</strong> characters</p>
                <p className='counting'><strong>{0.005 * count.length}</strong> minute read</p>
            </div>
            <div className={`color-${props.mode}`}>
                <h2 className='head'>Preview</h2>
                <p className='preview'>{text}</p>
            </div>
        </div>
    );
}

export default TextForm;