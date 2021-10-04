function Comment(props) {
    return (
        <div className="Comment">
            <div className="UserInfo">
                <Avatar user={props.author} />
                <div className="UserInfo-name">
                    {props.author.name}
                </div>
            </div>
            <div className="Comment-text">
                {props.text}
            </div>
            <div className="Comment-date">
                {formatDate(props.date)}
            </div>
        </div>
    );
}

class Cat extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            humor: 'happy'
        }
    }
    class MarkdownEditor extends React.Component {
    constructor(props) {
        super(props);
        this.md = new Remarkable();
        this.handleChange = this.handleChange.bind(this);
        this.state = { value: 'Hello, **world**!' };
    }

    handleChange(e) {
        this.setState({ value: e.target.value });
    }

    getRawMarkup() {
        return { __html: this.md.render(this.state.value) };
    }

    render() {
        return (
            <div className="MarkdownEditor">
                <h3>Input</h3>
                <label htmlFor="markdown-content">
                    Enter some markdown
                </label>
                import React from 'react'
                import ReactDOM from 'react-dom'

                import {Provider} from 'react-redux'
                import store from './store'

                import App from './App'

                const rootElement = document.getElementById('root')
                ReactDOM.render(
                <Provider store={store}>
                    <App />
                </Provider>,
                rootElement
                )
                <textarea
                    id="markdown-content"
                    onChange={this.handleChange}
                    defaultValue={this.state.value}
                />
                <h3>Output</h3>
                <div
                    className="content"
                    dangerouslySetInnerHTML={this.getRawMarkup()}
                />
            </div>
        );
    }
}

ReactDOM.render(
    <MarkdownEditor />,
    document.getElementById('markdown-example')
);
render() {
    return (
        <div><div className="MarkdownEditor">
        <h3>Input</h3>
        <label htmlFor="markdown-content">import React from 'react'
            import ReactDOM from 'react-dom'

            import {Provider} from 'react-redux'
            import store from './store'

            import App from './App'

            const rootElement = document.getElementById('root')
            ReactDOM.render(
            <Provider store={store}>
                <App />
            </Provider>,
            rootElement
            )
            Enter some markdown
        </label>
        <textarea
            id="markdown-content"
            onChange={this.handleChange}
            defaultValue={this.state.value}
        />
        <h3>Output</h3>
        <div
            className="content"
            dangerouslySetInnerHTML={this.getRawMarkup()}
        />
    </div>
            <h1>{this.props.name}</h1>
            <p>
                {this.props.color}
            </p>
        </div>
    );import React from 'react'
    import ReactDOM from 'react-dom'
    
    import { Provider } from 'react-redux'
    import store from './store'
    
    import App from './App'
    
    const rootElement = document.getElementById('root')
    ReactDOM.render(
      <Provider store={store}>
        <App />
      </Provider>,
      rootElement
    )
}
  }

class MarkdownEditor extends React.Component {
    constructor(props) {
        super(props);
        this.md = new Remarkable();
        this.handleChange = this.handleChange.bind(this);
        this.state = { value: 'Hello, **world**!' };
    }

    handleChange(e) {
        this.setState({ value: e.target.value });
    }

    getRawMarkup() {
        return { __html: this.md.render(this.state.value) };
    }

    render() {
        return (
            <div className="MarkdownEditor">
                <h3>Input</h3>
                <label htmlFor="markdown-content">
                    Enter some markdown
                </label>
                <textarea
                    id="markdown-content"
                    onChange={this.handleChange}
                    defaultValue={this.state.value}
                />
                <h3>Output</h3>
                <div
                    className="content"
                    dangerouslySetInnerHTML={this.getRawMarkup()}
                />
            </div>
        );
    }
}

ReactDOM.render(
    <MarkdownEditor />,
    document.getElementById('markdown-example')
);