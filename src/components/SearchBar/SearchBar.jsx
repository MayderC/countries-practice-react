import { Context } from "../../store/Conext";
import { useContext } from "react";
import "./index.css";

export const SearchBar = ({ props }) => {
  const { handleInputValue, handleSetSearch, input } = props;
  const { theme } = useContext(Context);

  return (
    <>
      <div className="search__container">
        <form className="search__bar" onSubmit={handleSetSearch}>
          <input
            className={`search__input--search ${theme.name}`}
            onChange={handleInputValue}
            value={input}
            type="text"
            name="country"
          />
        </form>
      </div>
    </>
  );
};
