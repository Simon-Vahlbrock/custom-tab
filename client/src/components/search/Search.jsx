import {useCallback, useMemo, useState} from "react";
import {faSearch} from "@fortawesome/free-solid-svg-icons";
import "./search.scss"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const Search = () => {
    const [input, setInput] = useState("");

    const handleInput = useCallback((value) => {
        setInput(value.target.value)
    }, []);

    const openWindow = useCallback(() => {
        window.open(`https://www.google.com/search?q=${input}`, '_blank');
        setInput('');
    }, [input]);

    const handleOnKeyDown = useCallback((e) => {
        if (e.key === 'Enter') {
            openWindow();
        }
    }, [openWindow]);

    const handleSubmitClick = useCallback(() => openWindow(), [openWindow]);

    return useMemo(() => (
        <div className="search">
            <div className="search__table-wrapper">
                <table className="search__table-wrapper__table">
                    <tr>
                        <td>
                            <input
                                type="text"
                                placeholder='Search'
                                className='search__table-wrapper__table__input'
                                value={input}
                                onChange={handleInput}
                                onKeyDown={handleOnKeyDown}
                                autoComplete="off"
                            />
                        </td>
                        <td>
                            <a href="#" onClick={handleSubmitClick}>
                                <FontAwesomeIcon
                                    className="search__table-wrapper__table__icon"
                                    icon={faSearch}
                                >
                                    search
                                </FontAwesomeIcon>
                            </a>
                        </td>
                    </tr>
                </table>
            </div>
        </div>
    ), [handleInput, handleOnKeyDown, handleSubmitClick, input]);
}

export default Search;