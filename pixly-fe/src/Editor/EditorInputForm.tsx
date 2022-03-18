import { EditorInputFormProps } from "../Interfaces";
import {useState} from "react";
/**
 * 
 * FILTERS AND STUFF
 * 
 * props: none (eventually will be handle submit)
 * 
 * state: formData (eventually, current state of form)
 * 
 * hierarchy: EditorHandler -> EditorInputForm
 * 
 */

function EditorInputForm({ updateFilter }: EditorInputFormProps) {

    const [filterSelection, setFilterSelection] = useState<string>("normal");

    // TODO: This should handle the changing input values of the form

    /** Handles obtaining the input from the form to update state and apply filters */
    function handleChange(evt: React.ChangeEvent<HTMLInputElement>): void {
        // MAKE NOTE OF THE EVENT TYPE AND THE TYPE OF THE GENERIC
        setFilterSelection(evt.target.value)
        // setFormData(previousData => value);
    }

    function handleSubmission(evt: React.FormEvent){
        evt.preventDefault();
        updateFilter(filterSelection);
    }




    return (
        <form className="editForm" onSubmit={handleSubmission}>
            <h1>Filter: </h1>
            <label htmlFor="normal">Normal: </label>
            <input
                id="normal"
                name="filter"
                type="radio"
                value="normal"
                onChange={handleChange}
            ></input>

            <label htmlFor="hueRotate">Hue Rotate: </label>
            <input
                id="hueRotate"
                name="filter"
                type="radio"
                value="hueRotate"
                onChange={handleChange}
            ></input>
        </form>
    )
}

export default EditorInputForm;