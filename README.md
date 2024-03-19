# React Conditional Rendering

This is a React library for conditional rendering.

## Installation

Use the package manager [npm](https://www.npmjs.com/) to install react-render-conditions.

```bash
npm install react-render-conditions
```

## Usage

```jsx
import { Switch, Case, Default } from "react-render-conditions";

function MyComponent() {
  return (
    <Switch>
      <Case condition={true}>This will render</Case>
      <Case condition={false}>This will not render</Case>
      <Default>This will render if none of the Cases render</Default>
    </Switch>
  );
}
```

## Running Tests

To run tests, use the following command:

```bash
npm test
```

## Author

```
Shashikant S. Wagh shashikantwagh721@gmail.com
```

## License

```
This project is licensed under the MIT License.
```
