import React, { useState } from "react";
// this gives us the plus sign icon for the input area
import AddIcon from "@mui/icons-material/Add";
// this changes our button to a 'floating action button'
import { Fab } from "@mui/material";
// a kind of animation we'll use on the input area
import { Zoom } from "@mui/material";

function InputArea (props) {

	// For the zoom animation
	const [isExpanded, setExpanded] = useState(false);

	const [note, setNote] = useState({
		title: "",
		content: ""
	});

  	function handleChange (event) {
  		const {name, value} = event.target;
  		setNote(prevNote => {
  			return {
  				...prevNote,
  				[name]: value
  			};
  		});
  	};

  	function submitNote (event) {
		props.onAdd(note);
		setNote({
			title: "",
			content: ""
		});
		// this prevents the browser from engaging in its default behavior
		// in this case, HTTP form submission, the browser naturally reloads the whole page when it's sumitted; we don't want that
		event.preventDefault();
	}

	function expand () {
		setExpanded(true);
	}

	// if isExpanded is true, render the input
	// if isExpanded is true, the text area is 3 rows, if not it's only 1 (so it expands)
	// use the zoom if isExpanded
	return (
		<div className="input-area">
	        <input
	        	name="title"
	        	onChange={handleChange}
	        	onClick={expand}
	        	type="text"
	        	value={note.title}
	        	placeholder="title" />
	        {isExpanded ?
	        <textarea
	        	name="content"
	        	onChange={handleChange}
	        	rows={isExpanded ? 3 : 1}
	        	value={note.content}
	        	placeholder="Take a note..." />
	        	: null}
	        <Zoom in={isExpanded}>
		        <Fab
		        	onClick={submitNote}
		        >
		  			<AddIcon />
		        </Fab>
		    </Zoom>
	    </div>
	)

};

export default InputArea;