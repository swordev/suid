import { AvatarTypeMap } from ".";
import Person from "../internal/svg-icons/Person";
import styled from "../styles/styled";
import { getAvatarUtilityClass } from "./avatarClasses";
import createComponentFactory from "@suid/base/createComponentFactory";
import { InPropsOf, PropsOf } from "@suid/types";
import clsx from "clsx";
import {
  createSignal,
  createEffect,
  on,
  splitProps,
  mergeProps,
  onCleanup,
} from "solid-js";

type OwnerState = InPropsOf<AvatarTypeMap> & {
  colorDefault: boolean;
};

const $ = createComponentFactory<AvatarTypeMap, OwnerState>()({
  name: "MuiAvatar",
  selfPropNames: [
    "alt",
    "children",
    "classes",
    "imgProps",
    "sizes",
    "src",
    "srcSet",
    "variant",
  ],
  utilityClass: getAvatarUtilityClass,
  slotClasses: (ownerState) => ({
    root: [
      "root",
      ownerState.variant,
      ownerState.colorDefault && "colorDefault",
    ],
    img: ["img"],
    fallback: ["fallback"],
  }),
});

const AvatarRoot = styled("div", {
  name: "MuiAvatar",
  slot: "Root",
  overridesResolver: (props, styles) => {
    const { ownerState } = props;

    return [
      styles.root,
      styles[ownerState.variant],
      ownerState.colorDefault && styles.colorDefault,
    ];
  },
})<OwnerState>(({ theme, ownerState }) => ({
  position: "relative",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexShrink: 0,
  width: 40,
  height: 40,
  fontFamily: theme.typography.fontFamily,
  fontSize: theme.typography.pxToRem(20),
  lineHeight: 1,
  borderRadius: "50%",
  overflow: "hidden",
  userSelect: "none",
  ...(ownerState.variant === "rounded" && {
    borderRadius: theme.shape.borderRadius,
  }),
  ...(ownerState.variant === "square" && {
    borderRadius: 0,
  }),
  ...(ownerState.colorDefault && {
    color: theme.palette.background.default,
    backgroundColor:
      theme.palette.mode === "light"
        ? theme.palette.grey[400]
        : theme.palette.grey[600],
  }),
}));

const AvatarImg = styled("img", {
  name: "MuiAvatar",
  slot: "Img",
  overridesResolver: (props, styles) => styles.img,
})({
  width: "100%",
  height: "100%",
  textAlign: "center",
  // Handle non-square image. The property isn't supported by IE11.
  objectFit: "cover",
  // Hide alt text.
  color: "transparent",
  // Hide the image broken icon, only works on Chrome.
  textIndent: "10000",
});

const AvatarFallback = styled(Person, {
  name: "MuiAvatar",
  slot: "Fallback",
  overridesResolver: (props, styles) => styles.fallback,
})({
  width: "75%",
  height: "75%",
});

function useLoaded(props: PropsOf<"img">) {
  let active = true;
  const [loaded, setLoaded] = createSignal<"loaded" | "error" | boolean>(false);

  onCleanup(() => {
    active = false;
  });

  createEffect(
    on(
      () => [props.crossOrigin, props.referrerPolicy, props.src, props.srcSet],
      () => {
        if (!props.src && !props.srcSet) {
          return undefined;
        }

        setLoaded(false);

        const image = new Image();
        image.onload = () => {
          if (!active) {
            return;
          }
          setLoaded("loaded");
        };
        image.onerror = () => {
          if (!active) {
            return;
          }
          setLoaded("error");
        };
        image.crossOrigin = props.crossOrigin as string;
        image.referrerPolicy = props.referrerPolicy as string;
        image.src = props.src as string;
        if (props.srcSet) {
          image.srcset = props.srcSet;
        }
      }
    )
  );

  return loaded;
}

/**
 *
 * Demos:
 *
 * - [Avatars](https://mui.com/components/avatars/)
 *
 * API:
 *
 * - [Avatar API](https://mui.com/api/avatar/)
 */
const Avatar = $.defineComponent(function Avatar(inProps) {
  const props = $.useThemeProps({ props: inProps });
  const [, other] = splitProps(props, [
    "alt",
    "children",
    "class",
    "component",
    "imgProps",
    "sizes",
    "src",
    "srcSet",
    "variant",
  ]);

  const baseProps = mergeProps(
    {
      component: "div",
      variant: "circular",
    },
    props
  );

  // Use a hook instead of onError on the img element to support server-side rendering.
  const loaded = useLoaded(
    mergeProps(() => props.imgProps || {}, {
      get src() {
        return props.src;
      },
      get srcSet() {
        return props.srcSet;
      },
    })
  );
  const hasImg = () => props.src || props.srcSet;
  const hasImgNotFailing = () => hasImg() && loaded() !== "error";

  const ownerState = mergeProps(props, {
    get colorDefault() {
      return !hasImgNotFailing();
    },
    get component() {
      return baseProps.component;
    },
    get variant() {
      return baseProps.variant;
    },
  });

  const classes = $.useClasses(ownerState);

  const children = () => {
    if (hasImgNotFailing()) {
      return (
        <AvatarImg
          alt={props.alt}
          src={props.src}
          srcSet={props.srcSet}
          sizes={props.sizes}
          ownerState={ownerState}
          class={classes.img}
          {...(props.imgProps || {})}
        />
      );
    }

    const children = props.children;

    if (children !== null && children !== undefined) {
      return children;
    } else if (hasImg() && props.alt) {
      return props.alt[0];
    } else {
      return <AvatarFallback class={classes.fallback} />;
    }
  };

  return (
    <AvatarRoot
      as={baseProps.component}
      ownerState={ownerState}
      class={clsx(classes.root, props.class)}
      {...other}
    >
      {children}
    </AvatarRoot>
  );
});

export default Avatar;
