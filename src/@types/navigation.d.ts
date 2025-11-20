export type StackList = {
  StackLogin: undefined;
  StackHome: undefined;
  StackRegister: undefined;
}

export type TabList = {
  TabHome: undefined;
  TabDieta: undefined;
  TabPost: undefined;
  TabProfile: undefined;
}


declare global {
  namespace ReactNavigation {
    interface RootParamList extends StackList, TabList {}
  }
}