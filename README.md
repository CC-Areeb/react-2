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

we can add more properties inside the constructors