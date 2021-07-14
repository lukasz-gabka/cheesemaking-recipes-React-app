import { useState, useEffect } from "react";
import { Route } from 'react-router-dom';
import authenticate from "../scripts/authentication";

const MainRoute = (props) => {
    const [loading, setLoading] = useState(true);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const { componentAuth: ComponentAuth, componentUnauth: ComponentUnauth, ...rest } = props;

    useEffect(() => {
        const fetchData = async () => {
            const result = await authenticate();

            setIsAuthenticated(result);
            setLoading(false);
        };
        fetchData();
    }, [setIsAuthenticated]);

    return (
        <Route
            {...rest}
            render={() =>
                isAuthenticated ? (
                    <ComponentAuth {...rest} />
                ) : loading ? (
                    <div>WCZYTYWANIE...</div>
                ) : (
                    <ComponentUnauth {...rest} />
                )
            }
        />
    );
};

export default MainRoute;