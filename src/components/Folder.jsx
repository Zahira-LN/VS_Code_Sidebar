import react, { useState } from "react";

const Folder = ({ explorer, handleInsertNode }) => {
  const [expand, setExpand] = useState(false);
  const [showInput, setShowInput] = useState({
    visible: false,
    isFolder: null,
  });

  const handleNewFolder = (e, isFolder) => {
    e.stopPropagation();

    setShowInput({
      visible: true,
      isFolder: isFolder,
    });
  };

  const onAddFolder = (e) => {
    if (e.keyCode === 13 && e.target.value) {
      handleInsertNode(explorer.id, e.target.value, showInput.isFolder);
      setShowInput({ ...showInput, visible: false });
    }
  };

  if (explorer.isFolder) {
    return (
      <div className="">
        <div onClick={() => setExpand(!expand)}>
          <span>📁{explorer.name}</span>

          <button onClick={(e) => handleNewFolder(e, true)}>Folder +</button>
          <button onClick={(e) => handleNewFolder(e, false)}>File -</button>
          {showInput.visible && (
            <div>
              <span>{showInput.isFolder ? "📁" : "📃"}</span>{" "}
              <input
                type="text"
                onKeyDown={onAddFolder}
                autoFocus={true}
                onBlur={() => setShowInput({ ...showInput, visible: false })}
              />
            </div>
          )}
        </div>

        <div
          style={{ display: expand ? "block" : "none", paddingLeft: "10px" }}
        >
          {explorer.isFolder &&
            explorer.items.map((subData) => (
              <Folder explorer={subData} handleInsertNode={handleInsertNode} />
            ))}
        </div>
      </div>
    );
  } else {
    return <div>📃{explorer.name}</div>;
  }
};

export default Folder;
