import { Route } from 'react-router-dom';

const MainRoute = (props) => {
    props.fetchData();
    const { componentAuth: ComponentAuth, componentUnauth: ComponentUnauth, isAuthenticated, ...rest } = props;

    return (
        <Route
            {...rest}
            render={() =>
                isAuthenticated ? (
                    <ComponentAuth {...rest} />
                ) : (
                    <ComponentUnauth {...rest} />
                )
            }
        />
    );
};

export default MainRoute;