import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = (props) => {
    props.fetchData();
    const { component: Component, isAuthenticated, redirectTo, ...rest } = props;

    return (
        <Route
            {...rest}
            render={() =>
                isAuthenticated ? (
                    <Component {...props} />
                ) : (
                    <Redirect
                        to={{
                            pathname: redirectTo,
                            state: { from: props.location },
                        }}
                    />
                )
            }
        />
    );
};

export default PrivateRoute;