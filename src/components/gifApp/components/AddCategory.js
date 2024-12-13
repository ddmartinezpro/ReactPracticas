import React, {useState} from "react";
import PropTypes from "prop-types";

const AddCategory = ({setCategories}) => {

    const [inputValue, setInputValue] = useState('')

    const handleOnChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        setCategories((v) => {
            if (inputValue && !v.includes(inputValue)) {
                return [inputValue, ...v];
            } else {
                return v;
            }
        });
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={inputValue}
                onChange={handleOnChange}
            />
            <button type="submit">Buscar</button>
        </form>
    );
};

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired,
}

export default AddCategory;
