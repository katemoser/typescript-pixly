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
function EditorInputForm({ handleSubmit }) {



    // TODO: This should handle the changing input values of the form

    /** Handles obtaining the input from the form to update state and apply filters */
    function handleChange(evt: React.ChangeEvent<HTMLInputElement>): void {
        // MAKE NOTE OF THE EVENT TYPE AND THE TYPE OF THE GENERIC

        const value = evt.target.value;
        console.log(value);
        // setFormData(previousData => value);
    }





    return (
        <form className="SearchForm" onSubmit={handleSubmission}>
            <label htmlFor="userSearchInput">Search: </label>
            <input
                id="normal"
                name="normal"
                type="radio"
                value={formData}
                onChange={handleChange}
            ></input>
            <input
                id="hueRotate"
                name="hueRotate"
                type="radio"
                value={formData}
                onChange={handleChange}
            ></input>
        </form>
    )
}

export default EditorInputForm;