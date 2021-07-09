import { useState, useEffect } from "react";
import { Route, Redirect } from 'react-router-dom';
import authenticate from "../scripts/authentication";

const UnauthRoute = (props) => {
    const [loading, setLoading] = useState(true);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const { component: Component, redirectTo, ...rest } = props;

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
                    <Redirect
                        to={{
                            pathname: redirectTo,
                            state: { from: props.location },
                        }}
                    />
                ) : loading ? (
                    <div>WCZYTYWANIE...</div>
                ) : (
                    <Component {...props} />
                )
            }
        />
    );
};

export default UnauthRoute;