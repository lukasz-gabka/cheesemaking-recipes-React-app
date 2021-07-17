import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = (props) => {
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