const ObservableArray = require("@nativescript/core/data/observable-array").ObservableArray;
const listViewModule = require("@nativescript/core/ui/list-view");
exports.pageLoaded = function(args) {
const page = args.object;
const listView = page.getViewById("myListView");
const itemList = new ObservableArray([
{ name: 'Bowling' },
{ name: 'Golf' },
{ name: 'Programming' },
{ name: 'IT' },
{ name: 'Blackjack' },

]);
listView.items = itemList;
listView.itemTemplate = `<Label text="{{ name }}" />`;
}

exports.onItemTap = function(args) {  
	const index = args.index;  
  console.log(`Item at ${index} tapped`);
}

