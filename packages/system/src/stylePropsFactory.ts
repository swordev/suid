import createSxPropsFactory from "./createSxPropsFactory";

const stylePropsFactory = createSxPropsFactory({
  spacing: {
    themeSpacing: false,
  },
  border: {
    themeBorderRadius: false,
  },
});

export default stylePropsFactory;
