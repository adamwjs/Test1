// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: bCbvUcteWZd6HDy751hPeA
// Component: -vHSYuMsoY0f5
import * as React from "react";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/host";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import Header from "../../Header"; // plasmic-import: lTr2G1MxBk6FF/component
import Footer from "../../Footer"; // plasmic-import: 1PBy2w-ZdBEOO/component

import { useScreenVariants as useScreenVariantsfD2Y32Q3IrH } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: fD2Y32q_3-ir_h/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_saa_s_website.module.css"; // plasmic-import: bCbvUcteWZd6HDy751hPeA/projectcss
import sty from "./PlasmicPrivacyPolicy.module.css"; // plasmic-import: -vHSYuMsoY0f5/css

import tiffanyTertipesNxcs8Wwj9J0UnsplashjpgM4XiLwQGfhefB3 from "./images/tiffanyTertipesNxcs8Wwj9J0Unsplashjpg.jpeg"; // plasmic-import: M4XILwQGfhefB3/picture
import corinneKutzTMi2R5NfoUnsplashjpg621Utzw3MzFOy from "./images/corinneKutzTMi2R5NfoUnsplashjpg.jpeg"; // plasmic-import: 621utzw3MzF-OY/picture

export type PlasmicPrivacyPolicy__VariantMembers = {};

export type PlasmicPrivacyPolicy__VariantsArgs = {};
type VariantPropType = keyof PlasmicPrivacyPolicy__VariantsArgs;
export const PlasmicPrivacyPolicy__VariantProps = new Array<VariantPropType>();

export type PlasmicPrivacyPolicy__ArgsType = {};
type ArgPropType = keyof PlasmicPrivacyPolicy__ArgsType;
export const PlasmicPrivacyPolicy__ArgProps = new Array<ArgPropType>();

export type PlasmicPrivacyPolicy__OverridesType = {
  root?: p.Flex<"div">;
  header?: p.Flex<typeof Header>;
  pageBanner?: p.Flex<"div">;
  columns?: p.Flex<"div">;
  h1?: p.Flex<"h1">;
  img?: p.Flex<typeof p.PlasmicImg>;
  mainSection?: p.Flex<"div">;
  container3?: p.Flex<"div">;
  footer?: p.Flex<typeof Footer>;
};

export interface DefaultPrivacyPolicyProps {
  className?: string;
}

export const defaultPrivacyPolicy__Args: Partial<PlasmicPrivacyPolicy__ArgsType> =
  {};

function PlasmicPrivacyPolicy__RenderFunc(props: {
  variants: PlasmicPrivacyPolicy__VariantsArgs;
  args: PlasmicPrivacyPolicy__ArgsType;
  overrides: PlasmicPrivacyPolicy__OverridesType;

  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;
  const args = Object.assign({}, defaultPrivacyPolicy__Args, props.args);
  const $props = args;
  const $ctx = ph.useDataEnv?.() || {};

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantsfD2Y32Q3IrH()
  });

  return (
    <React.Fragment>
      {}
      {}

      <div className={projectcss.plasmic_page_wrapper}>
        <p.Stack
          as={"div"}
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          hasGap={true}
          className={classNames(
            projectcss.all,
            projectcss.root_reset,
            projectcss.plasmic_default_styles,
            projectcss.plasmic_mixins,
            projectcss.plasmic_tokens,
            sty.root
          )}
        >
          <Header
            data-plasmic-name={"header"}
            data-plasmic-override={overrides.header}
            className={classNames("__wab_instance", sty.header)}
          />

          <div
            data-plasmic-name={"pageBanner"}
            data-plasmic-override={overrides.pageBanner}
            className={classNames(projectcss.all, sty.pageBanner)}
          >
            <div className={classNames(projectcss.all, sty.freeBox___22Jou)}>
              <p.Stack
                as={"div"}
                data-plasmic-name={"columns"}
                data-plasmic-override={overrides.columns}
                hasGap={true}
                className={classNames(projectcss.all, sty.columns)}
              >
                <div className={classNames(projectcss.all, sty.column__xIaHb)}>
                  <p.Stack
                    as={"div"}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.freeBox__rw1Ca)}
                  >
                    <h1
                      data-plasmic-name={"h1"}
                      data-plasmic-override={overrides.h1}
                      className={classNames(
                        projectcss.all,
                        projectcss.h1,
                        projectcss.__wab_text,
                        sty.h1
                      )}
                    >
                      {"Privacy Policy"}
                    </h1>

                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__mn7Qk
                      )}
                    >
                      {
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,"
                      }
                    </div>
                  </p.Stack>
                </div>

                <div className={classNames(projectcss.all, sty.column__gvlZ7)}>
                  <p.PlasmicImg
                    data-plasmic-name={"img"}
                    data-plasmic-override={overrides.img}
                    alt={""}
                    className={classNames(sty.img)}
                    displayHeight={"auto" as const}
                    displayMaxHeight={"none" as const}
                    displayMaxWidth={
                      hasVariant(globalVariants, "screen", "mobileOnly")
                        ? ("100%" as const)
                        : ("100%" as const)
                    }
                    displayMinHeight={"0" as const}
                    displayMinWidth={"0" as const}
                    displayWidth={"auto" as const}
                    loading={
                      hasVariant(globalVariants, "screen", "mobileOnly")
                        ? ("lazy" as const)
                        : ("lazy" as const)
                    }
                    src={
                      hasVariant(globalVariants, "screen", "mobileOnly")
                        ? {
                            src: corinneKutzTMi2R5NfoUnsplashjpg621Utzw3MzFOy,
                            fullWidth: 1920,
                            fullHeight: 1280,
                            aspectRatio: undefined
                          }
                        : {
                            src: tiffanyTertipesNxcs8Wwj9J0UnsplashjpgM4XiLwQGfhefB3,
                            fullWidth: 1920,
                            fullHeight: 1280,
                            aspectRatio: undefined
                          }
                    }
                  />
                </div>
              </p.Stack>
            </div>
          </div>

          <div
            data-plasmic-name={"mainSection"}
            data-plasmic-override={overrides.mainSection}
            className={classNames(projectcss.all, sty.mainSection)}
          >
            <div
              data-plasmic-name={"container3"}
              data-plasmic-override={overrides.container3}
              className={classNames(projectcss.all, sty.container3)}
            >
              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__nVq4M)}
              >
                <h4
                  className={classNames(
                    projectcss.all,
                    projectcss.h4,
                    projectcss.__wab_text,
                    sty.h4__fH6G
                  )}
                >
                  {hasVariant(globalVariants, "screen", "mobileOnly")
                    ? "Professional And\nDedicated Consulting Services..."
                    : "Lorem Heading main privacy policy"}
                </h4>

                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__oyBpp
                  )}
                >
                  {
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a metus quis lorem malesuada luctus. Cras lacinia, eros at dapibus molestie, risus tortor pretium ligula, eu malesuada tortor eros dapibus mi. Proin laoreet efficitur suscipit. Donec molestie volutpat euismod. Nulla gravida ligula in eros facilisis, sed dignissim tellus aliquam. Etiam convallis enim nisi, at suscipit tortor pulvinar at. "
                  }
                </div>
              </p.Stack>

              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__qYWib)}
              >
                <h4
                  className={classNames(
                    projectcss.all,
                    projectcss.h4,
                    projectcss.__wab_text,
                    sty.h4__vYj9N
                  )}
                >
                  {hasVariant(globalVariants, "screen", "mobileOnly")
                    ? "Professional And\nDedicated Consulting Services..."
                    : "Lorem Heading main privacy policy"}
                </h4>

                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__ajnTy
                  )}
                >
                  {
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a metus quis lorem malesuada luctus. Cras lacinia, eros at dapibus molestie, risus tortor pretium ligula, eu malesuada tortor eros dapibus mi. Proin laoreet efficitur suscipit. Donec molestie volutpat euismod. Nulla gravida ligula in eros facilisis, sed dignissim tellus aliquam. Etiam convallis enim nisi, at suscipit tortor pulvinar at. "
                  }
                </div>
              </p.Stack>

              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__eoUsj)}
              >
                <h4
                  className={classNames(
                    projectcss.all,
                    projectcss.h4,
                    projectcss.__wab_text,
                    sty.h4__teKig
                  )}
                >
                  {hasVariant(globalVariants, "screen", "mobileOnly")
                    ? "Professional And\nDedicated Consulting Services..."
                    : "Lorem Heading main privacy policy"}
                </h4>

                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__szqpB
                  )}
                >
                  {
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a metus quis lorem malesuada luctus. Cras lacinia, eros at dapibus molestie, risus tortor pretium ligula, eu malesuada tortor eros dapibus mi. Proin laoreet efficitur suscipit. Donec molestie volutpat euismod. Nulla gravida ligula in eros facilisis, sed dignissim tellus aliquam. Etiam convallis enim nisi, at suscipit tortor pulvinar at. "
                  }
                </div>
              </p.Stack>

              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__s4F)}
              >
                <h4
                  className={classNames(
                    projectcss.all,
                    projectcss.h4,
                    projectcss.__wab_text,
                    sty.h4__ev6J
                  )}
                >
                  {hasVariant(globalVariants, "screen", "mobileOnly")
                    ? "Professional And\nDedicated Consulting Services..."
                    : "The standard Lorem Ipsum passage heading"}
                </h4>

                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__ublfr
                  )}
                >
                  {
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a metus quis lorem malesuada luctus. Cras lacinia, eros at dapibus molestie, risus tortor pretium ligula, eu malesuada tortor eros dapibus mi. Proin laoreet efficitur suscipit. Donec molestie volutpat euismod. Nulla gravida ligula in eros facilisis, sed dignissim tellus aliquam. Etiam convallis enim nisi, at suscipit tortor pulvinar at. "
                  }
                </div>
              </p.Stack>
            </div>
          </div>

          <Footer
            data-plasmic-name={"footer"}
            data-plasmic-override={overrides.footer}
            className={classNames("__wab_instance", sty.footer)}
          />
        </p.Stack>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "header",
    "pageBanner",
    "columns",
    "h1",
    "img",
    "mainSection",
    "container3",
    "footer"
  ],
  header: ["header"],
  pageBanner: ["pageBanner", "columns", "h1", "img"],
  columns: ["columns", "h1", "img"],
  h1: ["h1"],
  img: ["img"],
  mainSection: ["mainSection", "container3"],
  container3: ["container3"],
  footer: ["footer"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  header: typeof Header;
  pageBanner: "div";
  columns: "div";
  h1: "h1";
  img: typeof p.PlasmicImg;
  mainSection: "div";
  container3: "div";
  footer: typeof Footer;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicPrivacyPolicy__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicPrivacyPolicy__VariantsArgs;
    args?: PlasmicPrivacyPolicy__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicPrivacyPolicy__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicPrivacyPolicy__ArgsType, ReservedPropsType> &
    // Specify overrides for each element directly as props
    Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    // Specify props for the root element
    Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicPrivacyPolicy__ArgProps,
      internalVariantPropNames: PlasmicPrivacyPolicy__VariantProps
    });

    return PlasmicPrivacyPolicy__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicPrivacyPolicy";
  } else {
    func.displayName = `PlasmicPrivacyPolicy.${nodeName}`;
  }
  return func;
}

export const PlasmicPrivacyPolicy = Object.assign(
  // Top-level PlasmicPrivacyPolicy renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    header: makeNodeComponent("header"),
    pageBanner: makeNodeComponent("pageBanner"),
    columns: makeNodeComponent("columns"),
    h1: makeNodeComponent("h1"),
    img: makeNodeComponent("img"),
    mainSection: makeNodeComponent("mainSection"),
    container3: makeNodeComponent("container3"),
    footer: makeNodeComponent("footer"),

    // Metadata about props expected for PlasmicPrivacyPolicy
    internalVariantProps: PlasmicPrivacyPolicy__VariantProps,
    internalArgProps: PlasmicPrivacyPolicy__ArgProps
  }
);

export default PlasmicPrivacyPolicy;
/* prettier-ignore-end */
