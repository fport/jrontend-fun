import React, {lazy, Suspense} from 'react'

const ReactFragment = lazy(() => import('react_fragment/App'));

const App = () => {
    return (
        <div>
            <h1>Welcome react-composer</h1>
            <Suspense fallback={"Loading.."}>
                <ReactFragment/>
            </Suspense>
        </div>
    )
}

export default App
