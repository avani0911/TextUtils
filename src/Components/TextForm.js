import React,{useState} from 'react'
//react Harry playlist7


export default function TextForm(props) {
  const handleUpClick = () =>{
    let new_text=text.toUpperCase();
    setText(new_text)
    props.showAlert("Converted into UpperCase","Success")
  }
  const handleLoClick = () =>{
    let lo_text=text.toLowerCase();
    setText(lo_text);
    props.showAlert("Converted into LowerCase",'Success')

  }
  const handleClearClick = () =>{
    let new_text="";
    setText(new_text)
    props.showAlert("Text Cleared",'Success')
  }
  const capitalizeWords = (str) => {
    return str
      .split(" ") // Split the string into an array of words
      .map(
        (word) =>
          word.charAt(0).toUpperCase() + word.slice(1) // Capitalize first letter of each word
      )
      .join(" "); // Join the words back into a single string
  };

  // Handle button click to capitalize words
  const handleFcapClick = () => {
    setText(capitalizeWords(text));
    props.showAlert("Converted Initial letters to UpperCase",'Success')
  };

  // Handle text area input change
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const[text,setText]=useState('');//he sangtai basically ki jo input aahe toh text madhe store hotoi and output in setText
  return (
    <>
    <div className="container my-3" style={{color:props.mode===`light`?`black`:`white`}}>
       <div>
          <h1>{props.heading}</h1>
          <div className="mb-3">
              <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode===`dark`?`grey`:`white`,color: props.mode===`light`?`black`:`white`}}  id="myBox" rows="8"></textarea>
          </div>
          <button className="btn btn-success mx-2" onClick={handleUpClick}>Convert to UpperCase</button>
          <button className="btn btn-success mx-2" onClick={handleLoClick}>Convert to LowerCase</button>
          <button className="btn btn-success mx-2" onClick={handleFcapClick}>Convert to First Letters Capital</button>
          <button className="btn btn-success mx-2" onClick={handleClearClick}>Clear text</button>
          
       </div>
</div>
<div className="container my-3"style={{color:props.mode===`light`?`black`:`white`}}>
<h2>Your text summary</h2>
<p>{text.split(' ').filter((word) => word.length > 0).length} words, {text.length} characters</p>

<p>Time in minutes to read this text is{0.008 * text.split(" ").length}</p>
<h2>Preview</h2>
<p>{text.length>0?text:"Enter something to preview here"}</p>
</div>
</>
  ) 
}
