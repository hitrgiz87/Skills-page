const ObservableArray = require("@nativescript/core/data/observable-array").ObservableArray;
const frameModule = require("@nativescript/core/ui/frame");

exports.pageLoaded = function(args) {
  const page = args.object;
  const listView = page.getViewById("myListView");
console.log
  const itemList = new ObservableArray([
    { name: 'Jim Bob', profilePicture: 'https://i.pravatar.cc/300', title: 'COO' },
    { name: 'Suzy Test', profilePicture: 'https://i.pravatar.cc/300', title: 'CIO' },
    // Add more items as needed...
  ]);

  listView.items = itemList;
};

exports.onItemTap = function(args) {
  const listView = args.object;
  const index = args.index;
  const tappedItem = listView.items.getItem(index);

  frameModule.Frame.topmost().navigate({
    moduleName: "detail-page",
    context: tappedItem,
    animated: true
  });
};
