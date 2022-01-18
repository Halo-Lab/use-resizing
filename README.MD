<h1>useResizing</h1>

<img src="http://api.halo-lab.com/wp-content/uploads/useResizing-narrow.gif" alt="useResizing demo" height="192" width="600">


React Hook that triggers on window resize
<br/>
<br/>
<b>Example</b>
<br/>
In your React component:
<br/>

```
import useResize from "use-resizing"

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

## Word from author

Have fun! ✌️

<a href="https://www.halo-lab.com/?utm_source=github">
  <img src="https://dgestran.sirv.com/Images/supported-by-halolab.png" alt="Supported by Halo lab" height="60">
</a>
