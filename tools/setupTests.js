import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() })

// Force propType warnings into errors so tests will fail
// eslint-disable-next-line no-console
const originalConsoleError = console.error

// eslint-disable-next-line no-console
console.error = (message) => {
  if (/(Failed prop type)/.test(message)) {
    throw new Error(message)
  }

  originalConsoleError(message)
}
