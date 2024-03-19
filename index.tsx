import React, { ReactNode, FC } from "react";

interface SwitchProps {
  children: ReactNode;
}

interface CaseProps {
  children: ReactNode;
  condition: boolean;
}

interface DefaultProps {
  children: ReactNode;
}

const Switch: FC<SwitchProps> = ({ children }) => {
  let matchChild: ReactNode | null = null;
  let defaultCase: ReactNode | null = null;

  React.Children.forEach(children, (child) => {
    if (!matchChild && React.isValidElement(child) && child.type === Case) {
      const { condition } = child.props as CaseProps;
      if (condition) {
        matchChild = child;
      }
    } else if (
      !defaultCase &&
      React.isValidElement(child) &&
      child.type === Default
    ) {
      defaultCase = child;
    }
  });

  return matchChild ?? defaultCase ?? null;
};

const Case: FC<CaseProps> = ({ children }) => <>{children}</>;

const Default: FC<DefaultProps> = ({ children }) => <>{children}</>;

export { Switch, Case, Default };
