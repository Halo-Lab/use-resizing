<h1>useResize</h1>
React (State and Effect) Hook to get your window size.
<br/>
<br/>
<b>Example</b>
<br/>
In your React component:
<br/>

```
import useResize from "useResize"

function SizeInfo() {
  const screenSize = useResize()

  return <div>size = ({ screenSize.width }, { screenSize.height })</div>
}
```

<b>Settings:</b>
<br/>
debounceTime - number (default 100ms)

```
...
const screenSize = useResize({debounceTime:200})
```
