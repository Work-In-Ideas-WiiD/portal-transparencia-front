import {
    BrowserRouter,
    Routes as Switch,
    Route

} from "react-router-dom"
import { Header } from "./components/header"
import { Home } from "./pages/Home"

export function Routes() {
    return (
        <BrowserRouter>
            <Header />
            <Switch>
                <Route path="/" element={<Home />}></Route>
            </Switch>
        </BrowserRouter>
    )
}