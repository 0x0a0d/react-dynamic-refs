import { MutableRefObject, RefObject } from "react";

type DynamicRefs = {
  [k: string]: MutableRefObject<any>|RefObject<any>
}

export const useDynamicRefs: (targetObject?: DynamicRefs) => DynamicRefs
