# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)





# Class based components

React also has class based approach for its components as shown below in an example:

```
export default class App extends Component {
  feeling = "😎";

  render() {
    return (
      <>
        <Navbar />
        <News />
      </>
    )
  }
}
```

### Props

The way we define props is a bit different when using class based components

```
let { title, description, imgUrl } = this.props;
return (
    <>
        <div className="card" style={{ width: "26rem" }}>
            <img src={imgUrl} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <div className="text-center">
                    <a href="/newsdetail" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>
    </>
)
```

| Keyword  | Detail |
| ------------- | ------------- |
|this|the 'this' keyword us required when you want to use a variable or method in the same class|
|{name_of_prop}|this is a way to get values as a prop and this is mostly used to pass static data|  


```
<NewsItem title="This is the title" description="This is a description" />
```
we can set prop values like we use attributes in basic HTML such as `class`, `id` and more.

### Constructors

We can use Constructors like we use in normal object oriented programming as shown below

```
constructor () {
    super()
}
```

- the constructor needs to have the `super()` keyword first before we can use it.
- constructor will run when the object of this class is called
- we can add more properties inside the constructors

```
articles = [
    {
        "source": {
            "id": "bloomberg",
            "name": "Bloomberg"
        },
        "author": null,
        "title": "Stock Market Today: Dow, S&P Live Updates for Jan. 11 - Bloomberg",
        "description": null,
        "url": "https://www.bloomberg.com/tosv2.html?vid=&uuid=d0e74053-918d-11ed-8ba4-734a66645756&url=L25ld3MvYXJ0aWNsZXMvMjAyMy0wMS0xMC9hc2lhbi1zdG9ja3Mtc2V0LXRvLXJpc2UtYW1pZC1pbmZsYXRpb24tb3B0aW1pc20tbWFya2V0cy13cmFw",
        "urlToImage": null,
        "publishedAt": "2023-01-11T06:46:00Z",
        "content": "To continue, please click the box below to let us know you're not a robot."
    },
];
constructor () {
    super();
    this.state = {
        articles: this.articles,
        loading: false,
    }
}
```

### Mapping

we can map over the large collection of data 

```
<div className="row">
    {this.state.articles.map((element) => {
        return <div className="col-4">
            <NewsItem
                key={element.url}
                title="This is the title"
                description="This is a description"
                imgUrl="https://ichef.bbci.co.uk/news/1024/branded_news/1E7F/production/_128270870_gettyimages-1245977780.jpg"
                newsUrl="TODO"
            />
        </div>
    })}
</div>
```

- the map needs to have a callback arrow function that always returns something like a value or an HTML template.
- array maps also need a unique prop keys so we have passed a key attribute inside the component tag.

### Mounting 

We can use the `componentDidMount()` life cycle hook to re-render a component.

### Async
It allows us to write promises-based code as if it was synchronous and it checks that we are not breaking the execution thread.
```
async componentDidMount() {...}
```


### Await 
This is used so that we JavaScript can wait for a promise response when the async function has fired.
```
let url = 'https://newsapi.org/v2/everything?q=apple&from=2023-01-11&to=2023-01-11&sortBy=popularity&apiKey=YOUR_API_KEY';
let data = await fetch(url);
```


### Setter 
We use the `setState()` method as the setter for our constructor to set values without mutating them

##### Answer from google 
`With setState() we can change the state without directly mutating it. This will lead to the re-rendering of the component due to the change of the state.`

### complete snippet
```
async componentDidMount()
{
    let url = 'https://newsapi.org/v2/everything?q=apple&from=2023-01-11&to=2023-01-11&sortBy=popularity&apiKey=YOUR_API_KEY';
    let data = await fetch(url);
    let parse = await data.json();
    this.setState({articles: parse.articles});
}
```

the `let parse = await data.json();` is used to convert the data into json format as API data is usually represented in JSON format.

Since now we are not using static data so we can set the articles as an empty array at the start and use the `componentDidMount` to fetcht the results by usng the API and to set our data
```
constructor() {
    super();
    this.state = {
        articles: [],
        loading: false,
    }
}

async componentDidMount()
{
    let url = 'https://newsapi.org/v2/everything?q=apple&from=2023-01-11&to=2023-01-11&sortBy=popularity&apiKey=e29fdd2fa8144c15af2e1dca8435e6f5';
    let data = await fetch(url);
    let parse = await data.json();
    this.setState({articles: parse.articles});
}

render() {
    return (
        <>
            <div className="container mt-4">
                <div style={this.customGrid}>
                    {this.state.articles.map((element) => {
                        return <div key={element.url}>
                            <NewsItem
                                title={element.title.slice(0, 30)}
                                description={element.description.slice(0, 90)}
                                imgUrl={element.urlToImage}
                                newsUrl={element.url}
                            />
                        </div>
                    })}
                </div>
            </div>
        </>
    )
}

```

### Custom grid 
We can also directly apply css by first defining a variabe like customGrid and then calling it inside the container tag by using the `this` keyword.
```
customGrid = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "3rem",
}

<div style={this.customGrid}>
```