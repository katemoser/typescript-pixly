import { EditorInputFormProps } from "../Interfaces";
import { useState } from "react";
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

    /** Handles obtaining the input from the form to update state and apply filters */
    function handleChange(evt: React.ChangeEvent<HTMLInputElement>): void {
        // MAKE NOTE OF THE EVENT TYPE AND THE TYPE OF THE GENERIC

        setFilterSelection(evt.target.value)
    }

    function handleSubmission(evt: React.FormEvent) {
        evt.preventDefault();
        updateFilter(filterSelection);
    }

    return (
        <form className="editForm" onSubmit={handleSubmission}>
            <h1>Filter: </h1>
            <div>
                <label htmlFor="normal">Normal: </label>
                <input
                    id="normal"
                    name="filter"
                    type="radio"
                    value="normal"
                    onChange={handleChange}
                ></input>
            </div>
            <div>
                <label htmlFor="huerotate">Hue Rotate: </label>
                <input
                    id="huerotate"
                    name="filter"
                    type="radio"
                    value="huerotate"
                    onChange={handleChange}
                ></input>
            </div>
            <div>
                <label htmlFor="grayscale">Grayscale: </label>
                <input
                    id="grayscale"
                    name="filter"
                    type="radio"
                    value="grayscale"
                    onChange={handleChange}
                ></input>
            </div>
            <div>
                <label htmlFor="sepia">Sadscale: </label>
                <input
                    id="sepia"
                    name="filter"
                    type="radio"
                    value="sepia"
                    onChange={handleChange}
                ></input>
            </div>
            <div>
                <label htmlFor="saturate">Super Sat: </label>
                <input
                    id="saturate"
                    name="filter"
                    type="radio"
                    value="saturate"
                    onChange={handleChange}
                ></input>
            </div>
            <div>
                <label htmlFor="invert">Inverted: </label>
                <input
                    id="invert"
                    name="filter"
                    type="radio"
                    value="invert"
                    onChange={handleChange}
                ></input>
            </div>
            <div>
                <label htmlFor="contrast">Contrast: </label>
                <input
                    id="contrast"
                    name="filter"
                    type="radio"
                    value="contrast"
                    onChange={handleChange}
                ></input>
            </div>
            <div>
                <label htmlFor="flip">Flip: </label>
                <input
                    id="flip"
                    name="filter"
                    type="radio"
                    value="flip"
                    onChange={handleChange}
                ></input>
            </div>
            <button>Update Filter!</button>
        </form>
    )
}

export default EditorInputForm;