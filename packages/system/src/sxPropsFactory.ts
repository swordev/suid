import createSxPropsFactory from "./createSxPropsFactory";

const sxPropsFactory = createSxPropsFactory({
  spacing: {
    themeSpacing: true,
  },
  border: {
    themeBorderRadius: true,
  },
});

export default sxPropsFactory;
