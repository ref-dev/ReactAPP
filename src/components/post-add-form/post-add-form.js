import React from 'react';
import './post-add-form';

const PostAddForm = () => {
    return (
        <form className="bottom-panel d-flex">
            <input
                type="text"
                placeholder="Добавить запись"
                className="form-control new-post-label"/>
            <button
                type="submit"
                className="btn button-outline-secondary">
                Добавить</button>
        </form>
    ) 
}
export default PostAddForm;