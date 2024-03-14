Hello welcome to my react learning repo

########Episode 1#########

-> React is a javascript a library not a framework and it is developed by facebook developers

CDN links:
-> CDN means content delivery network
-> React is one the library that they hoisted in their websites and then they will share javascript scripts, that scripts links, that will take and inject into our main index.html file then the react will be access entire project
-> basically CDN will provide 2 scripts React and ReactDom
-> React script contains entire react core code and ReactDom contains the DOM operations related code
-> why facebook developers developed 2 different libraries is we can use React in browsers and mobile also, but dom related operations are not required for mobile due to that facebook developers created 2 different libraries
-> simply CDN will make our app light weight

createElement:
-> createElement is a React function
-> generally browser will understand only javascript only, so whatever will write while going to browser it will be converted into javascript like objects
-> normally if you want to create HTML elements using javascript then will use document object createElement function
-> similarly in React we have createElement function that will create javascript object and then while rendering to DOM it will be converted into javascript object
-> syntax: React.createElement("tag", {attributes}, "data/child")
-> param-1 we need to provide html tag name
-> param-2 is attributes what ever attributes we want for our tag that we need to attach using object format
-> param-3 is whatever data we want to display inside that tag we need to pass it as a string or if we want to create any child element that you can put again using createElement function and also if more than one child is there then we need to merge all the child elements into an array

createRoot:
-> createRoot is ReactDOM function
-> once the react element is created then we need to put inside the DOM for that we need to use ReactDOM createRoot function
-> basically react needs a root element to perform all react related operations, once the root is created then react will work inside that root element only, outside of the element react will not work
-> React core functionality or responsibility is creating elements but ReactDOM responsibility is to manage and perform DOM related operations
-> in order to create root first we need an html tag with an identifier like <div id="root"></div>, so now we need to get this id and then we need to create root element using ReactDOM createRoot function
->const root =  ReactDOM.createRoot(document.getElementById('root'))

render:
-> render is ReactDOM function that will come once root is created using createRoot
-> basically createElement will create javascript object that will hold whatever data we passed that will convert into Key-value pair object not into direct HTML Tag
-> so that javascript object will pass it to render function and that will convert into corresponding HTML tag and then it will attach under our main root tag as a child tag
-> root.render(javascriptObject)
-> javascript object means element that created using createElement function
