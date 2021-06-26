import { useRef } from 'react'

/**
 * return dynamic refs
 */
export const useDynamicRefs = () => {
  return new Proxy({}, {
    get(target: {}, p) {
      const typeP = typeof p
      if (typeP !== 'string' && typeP !== 'number') {
        return target[p]
      } else {
        if (target[p] == null) {
          // eslint-disable-next-line react-hooks/rules-of-hooks
          target[p] = useRef()
        }
        return target[p]
      }
    }
  })
}
