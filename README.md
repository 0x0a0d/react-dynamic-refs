## @cylution/react-dynamic-refs

> npm i @cylution/react-dynamic-refs

Or
> yarn add @cylution/react-dynamic-refs

## Usage

```js
import React from 'react'
import { useDynamicRefs } from '@cylution/react-dynamic-refs'


export const Test = () => {
  const refs = useDynamicRefs()
  
  // access ref
  // refs.anyTag.current?.[[method]] 
  
  return (
    <AnyTag ref={refs.anyTag}>
      <Depth ref={refs.depth}>
        // just refs.[[any]]
      </Depth>
    </AnyTag>
  )
}
```
