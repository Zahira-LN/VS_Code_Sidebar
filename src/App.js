import "./styles.css";
import FolderData from "./data/FolderData.js";
import { useState } from "react";
import Folder from "./components/Folder";
import userTraverseTree from "./hooks/UserTraverseTree.js";

export default function App() {
  const [explorerData, setEplorerData] = useState(FolderData);

  const { InsertNode } = userTraverseTree();

  const handleInsertNode = (folderID, item, isFolder) => {
    const finalTree = InsertNode(explorerData, folderID, item, isFolder);

    setEplorerData(finalTree);
  };

  return (
    <div>
      <Folder explorer={explorerData} handleInsertNode={handleInsertNode} />
    </div>
  );
}
