# Быстрый старт

Описание 

Прежде чем начать:

Мы создадим игру «Крестики-нолики». Полный код проекта и можно найти на Github. Не волнуйтесь, если сразу код покажется вам непонятным. В этом туториале мы шаг за шагом разберем, как создать игру и каждый отдельный компонент.

Для работы с примерами необходимы базовые навыки:

* HTML
* JavaScript
* БЭМ

В рамках этого урока мы не будем затрагивать вопросы стилизации проекта. Все CSS-правила можно будет скопировать, перейдя по ссылкам.

Установка

```sh
git clone git@github.com:bem/bem-react-boilerplate.git my-app
cd my-app
rm -rf .git
git init
npm i
npm start
```



Что должно получиться.

Начало работы.

Напишем js, потом добавим всем блокам css. 

Чтобы создать игру нам понадобится три компонента.
* Square
* Board
* Game




## Getting Started

Start with this example: Starter Code.

It contains the shell of what we’re building today. We’ve provided the styles so you only need to worry about the JavaScript.

In particular, we have three components:

* Square
* Board
* Game
* Page (for CSS only)

The Square component renders a single <button>, the Board renders 9 squares, and the Game component renders a board with some placeholders that we’ll fill in later. None of the components are interactive at this point.


Passing Data Through Props
Just to get our feet wet, let’s try passing some data from the Board component to the Square component.

In Board’s renderSquare method, change the code to pass a value prop to the Square:

class Board extends React.Component {
  renderSquare(i) {
    return <Square value={i} />;
  }
Then change Square’s render method to show that value by replacing {/* TODO */} with {this.props.value}:

class Square extends React.Component {
  render() {
    return (
      <button className="square">
        {this.props.value}
      </button>
    );
  }
}
Before:

React Devtools
After: You should see a number in each square in the rendered output.

React Devtools
View the current code.

An Interactive Component
Let’s make the Square component fill in an “X” when you click it. Try changing the button tag returned in the render() function of the Square like this:

class Square extends React.Component {
  render() {
    return (
      <button className="square" onClick={() => alert('click')}>
        {this.props.value}
      </button>
    );
  }
}
If you click on a square now, you should get an alert in your browser.

This uses the new JavaScript arrow function syntax. Note that we’re passing a function as the onClick prop. Doing onClick={alert('click')} would alert immediately instead of when the button is clicked.

React components can have state by setting this.state in the constructor, which should be considered private to the component. Let’s store the current value of the square in state, and change it when the square is clicked.

First, add a constructor to the class to initialize the state:

class Square extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null,
    };
  }

  render() {
    return (
      <button className="square" onClick={() => alert('click')}>
        {this.props.value}
      </button>
    );
  }
}
In JavaScript classes, you need to explicitly call super(); when defining the constructor of a subclass.

Now change the Square render method to display the value from the current state, and to toggle it on click:

Replace this.props.value with this.state.value inside the <button> tag.
Replace the () => alert() event handler with () => this.setState({value: 'X'}).
Now the <button> tag looks like this:

class Square extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null,
    };
  }

  render() {
    return (
      <button className="square" onClick={() => this.setState({value: 'X'})}>
        {this.state.value}
      </button>
    );
  }
}
Whenever this.setState is called, an update to the component is scheduled, causing React to merge in the passed state update and rerender the component along with its descendants. When the component rerenders, this.state.value will be 'X' so you’ll see an X in the grid.

If you click on any square, an X should show up in it.

View the current code.

