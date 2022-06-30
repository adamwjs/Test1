// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: bCbvUcteWZd6HDy751hPeA
// Component: XcIOgm7NvONag8
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
import Button from "../../Button"; // plasmic-import: i2RFTUsbFArGA/component

import { useScreenVariants as useScreenVariantsfD2Y32Q3IrH } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: fD2Y32q_3-ir_h/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_saa_s_website.module.css"; // plasmic-import: bCbvUcteWZd6HDy751hPeA/projectcss
import sty from "./PlasmicHeader2.module.css"; // plasmic-import: XcIOgm7NvONag8/css

import Icon2Icon from "./icons/PlasmicIcon__Icon2"; // plasmic-import: 2AbkSIbRgrhhNV/icon
import IconIcon from "./icons/PlasmicIcon__Icon"; // plasmic-import: 3-y7PVjbUjaor_/icon
import ChecksvgIcon from "./icons/PlasmicIcon__Checksvg"; // plasmic-import: ftfnPPuGWa6LBB/icon

export type PlasmicHeader2__VariantMembers = {};

export type PlasmicHeader2__VariantsArgs = {};
type VariantPropType = keyof PlasmicHeader2__VariantsArgs;
export const PlasmicHeader2__VariantProps = new Array<VariantPropType>();

export type PlasmicHeader2__ArgsType = {};
type ArgPropType = keyof PlasmicHeader2__ArgsType;
export const PlasmicHeader2__ArgProps = new Array<ArgPropType>();

export type PlasmicHeader2__OverridesType = {
  root?: p.Flex<"div">;
  button?: p.Flex<typeof Button>;
};

export interface DefaultHeader2Props {
  className?: string;
}

export const defaultHeader2__Args: Partial<PlasmicHeader2__ArgsType> = {};

function PlasmicHeader2__RenderFunc(props: {
  variants: PlasmicHeader2__VariantsArgs;
  args: PlasmicHeader2__ArgsType;
  overrides: PlasmicHeader2__OverridesType;

  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;
  const args = Object.assign({}, defaultHeader2__Args, props.args);
  const $props = args;
  const $ctx = ph.useDataEnv?.() || {};

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantsfD2Y32Q3IrH()
  });

  return (
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
      <p.Stack
        as={"div"}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox__n1A3K)}
      >
        {true ? (
          <a
            className={classNames(
              projectcss.all,
              projectcss.a,
              sty.link__aacnT
            )}
            href={"/" as const}
          >
            <Icon2Icon
              className={classNames(projectcss.all, sty.svg___8Onal)}
              role={"img"}
            />
          </a>
        ) : null}

        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox__zmpMm)}
        >
          <p.Stack
            as={"a"}
            hasGap={true}
            className={classNames(
              projectcss.all,
              projectcss.a,
              sty.link___6Ojc1
            )}
            href={"/about-us" as const}
          >
            {false ? (
              <IconIcon
                className={classNames(projectcss.all, sty.svg__znbMf)}
                role={"img"}
              />
            ) : null}

            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__lQpAq
              )}
            >
              {"About Us"}
            </div>

            {false ? (
              <IconIcon
                className={classNames(projectcss.all, sty.svg__zPu0C)}
                role={"img"}
              />
            ) : null}
          </p.Stack>

          <p.Stack
            as={"a"}
            hasGap={true}
            className={classNames(
              projectcss.all,
              projectcss.a,
              sty.link__blhfk
            )}
            href={"/features" as const}
          >
            {false ? (
              <IconIcon
                className={classNames(projectcss.all, sty.svg__cjRyf)}
                role={"img"}
              />
            ) : null}

            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__afEsk
              )}
            >
              {"Features"}
            </div>

            {false ? (
              <IconIcon
                className={classNames(projectcss.all, sty.svg__nZ6LC)}
                role={"img"}
              />
            ) : null}
          </p.Stack>

          <p.Stack
            as={"a"}
            hasGap={true}
            className={classNames(
              projectcss.all,
              projectcss.a,
              sty.link__orCon
            )}
            href={"/pricing" as const}
          >
            {false ? (
              <IconIcon
                className={classNames(projectcss.all, sty.svg__vnyns)}
                role={"img"}
              />
            ) : null}

            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__iIuEg
              )}
            >
              {"Pricing "}
            </div>

            {false ? (
              <IconIcon
                className={classNames(projectcss.all, sty.svg___0UoZr)}
                role={"img"}
              />
            ) : null}
          </p.Stack>

          <p.Stack
            as={"a"}
            hasGap={true}
            className={classNames(
              projectcss.all,
              projectcss.a,
              sty.link__xHbXj
            )}
            href={"/contact" as const}
          >
            {false ? (
              <IconIcon
                className={classNames(projectcss.all, sty.svg___9M1Oo)}
                role={"img"}
              />
            ) : null}

            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__mvXoC
              )}
            >
              {"Contact"}
            </div>

            {false ? (
              <IconIcon
                className={classNames(projectcss.all, sty.svg__bcbx)}
                role={"img"}
              />
            ) : null}
          </p.Stack>

          <p.Stack
            as={"a"}
            hasGap={true}
            className={classNames(
              projectcss.all,
              projectcss.a,
              sty.link__qkdUs
            )}
            href={"/blog" as const}
          >
            {false ? (
              <IconIcon
                className={classNames(projectcss.all, sty.svg__yjnUl)}
                role={"img"}
              />
            ) : null}

            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__yO8M
              )}
            >
              {"Blog"}
            </div>

            {false ? (
              <IconIcon
                className={classNames(projectcss.all, sty.svg___0Ms18)}
                role={"img"}
              />
            ) : null}
          </p.Stack>

          <Button
            data-plasmic-name={"button"}
            data-plasmic-override={overrides.button}
            className={classNames("__wab_instance", sty.button)}
            shape={"rounded" as const}
          >
            {"Get started"}
          </Button>
        </p.Stack>
      </p.Stack>
    </p.Stack>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "button"],
  button: ["button"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  button: typeof Button;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicHeader2__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicHeader2__VariantsArgs;
    args?: PlasmicHeader2__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicHeader2__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicHeader2__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicHeader2__ArgProps,
      internalVariantPropNames: PlasmicHeader2__VariantProps
    });

    return PlasmicHeader2__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicHeader2";
  } else {
    func.displayName = `PlasmicHeader2.${nodeName}`;
  }
  return func;
}

export const PlasmicHeader2 = Object.assign(
  // Top-level PlasmicHeader2 renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    button: makeNodeComponent("button"),

    // Metadata about props expected for PlasmicHeader2
    internalVariantProps: PlasmicHeader2__VariantProps,
    internalArgProps: PlasmicHeader2__ArgProps
  }
);

export default PlasmicHeader2;
/* prettier-ignore-end */
