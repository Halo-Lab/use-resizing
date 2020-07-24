<h1>useResizing</h1>

<img src="http://api.halo-lab.com/wp-content/uploads/useResizing.gif" alt="useResizing demo" height="192" width="600">


React Hook that triggers on window resize
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
