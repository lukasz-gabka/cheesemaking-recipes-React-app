import { Route, Redirect } from 'react-router-dom';

const PublicRoute = (props) => {
    props.fetchData();
    const { component: Component, isAuthenticated, redirectTo, ...rest } = props;

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
                ) : (
                    <Component {...props} />
                )
            }
        />
    );
};

export default PublicRoute;