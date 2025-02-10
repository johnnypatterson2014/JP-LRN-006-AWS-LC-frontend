import { useRef } from "react";
import { useState } from "react";
import React from "react";

export default function TextArea (props) {
  const {onSubmit} = props;
  const inputRef = useRef();
  const [_value, _setValue] = useState('');

  const handleOnChange = (e) => {
    _setValue(e.target.value);
  };

  return (
    <div className="easy-text-area-container">
      <label className="easy-text-area-input-label">Enter some text to search the selected pdf file</label>
      <div className="easy-text-area-container">
        <textarea
          ref={inputRef}
          onChange={handleOnChange}
          className="easy-text-area-input"
          placeholder="enter some text"
          value={_value}
        />
      </div>

        <div>
        <button onClick={() => onSubmit(_value)}>Submit</button>
      </div>

    </div>
  );
};
