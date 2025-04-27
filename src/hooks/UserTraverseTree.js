const userTraverseTree = () => {
  function InsertNode(tree, folderId, Item, isFolder) {
    if (tree.id == folderId && tree.isFolder) {
      tree.items.unshift({
        id: new Date().getTime(),
        name: Item,
        isFolder: isFolder,
        items: [],
      });
      return tree;
    }

    let latestNode = [];
    latestNode = tree.items.map((subtree) => {
      return InsertNode(subtree, folderId, Item, isFolder);
    });

    return { ...tree, items: latestNode };
  }

  return { InsertNode };
};

export default userTraverseTree;
