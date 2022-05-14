import { Children, createContext, ReactElement } from "react";
import { RenderedScreen } from "../components/RenderedScreen";
import { useStack } from "../hooks/useStack";



interface NavigationProps {
  navigate: (value: string) => void
}

interface Props {
  children: ReactElement | ReactElement[];
}

export const navigation = createContext({} as NavigationProps);


export const StackNavigator = ({ children }: Props ) => {
  const screensArray = Children.map(children, ((element, index) => ({
    component: <element.props.component />, 
    name: element.props.name, 
    index 
  })))

  const { stack, pop, push } = useStack(screensArray[0]);


  const navigate = (value: string) => {
    const element = screensArray.find(element => element.name === value);
    if (!element) return;
    if (stack[stack.length-2]?.name === value) {
      pop();
    } else {
      push(element);
    }
  }

  return (
    <navigation.Provider value={{ navigate }}>
      {stack.map((item) => (
        <RenderedScreen 
          key={item.index} 
          isFirst={item.index === 0}
        >
          {item.component}
        </RenderedScreen>
      ))}
    </navigation.Provider>
  );
};